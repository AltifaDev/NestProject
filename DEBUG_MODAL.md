# PropertyDetailModal Debug Guide

## 🔍 วิธีตรวจสอบปัญหา

### 1. เปิด Browser DevTools
- กด F12 หรือ Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)
- ไปที่ Console tab

### 2. ตรวจสอบ Console Logs

เมื่อคลิกที่ property card หรือ marker คุณควรเห็น logs ตามลำดับนี้:

```
🖱️ Property card clicked: [id] [title]
✅ Selected property set: [property object]
🔄 SearchResultsModal state: { isOpen: true, selectedProperty: [title] }
🏠 PropertyDetailModal render: { property: [title], isOpen: true, hasProperty: true }
✅ Rendering modal with property: [title]
🎬 PropertyDetailModal useEffect: { isOpen: true, hasModalRef: true, hasContentRef: true, hasOverlayRef: true }
✅ Opening modal with animation
📜 Scrolled to top
✅ Modal animation complete
```

### 3. ตรวจสอบ DOM Elements

ใน Elements tab ของ DevTools:

```html
<!-- ควรเห็น structure นี้ -->
<div class="fixed inset-0 z-[10000]" style="display: flex; visibility: visible; opacity: 1;">
  <!-- Overlay -->
  <div class="absolute inset-0 bg-slate-900/60"></div>
  
  <!-- Content -->
  <div class="w-full max-w-[1400px] h-[95vh] bg-white">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <button>X</button>
      <!-- Price, Share, Save buttons -->
    </div>
    
    <!-- Scrollable Content -->
    <div class="flex-1 overflow-y-auto">
      <!-- Gallery -->
      <div class="grid grid-cols-12">...</div>
      
      <!-- Details -->
      <div class="max-w-7xl">
        <h1>Property Title</h1>
        <!-- Stats, Description, Amenities -->
      </div>
    </div>
  </div>
</div>
```

### 4. ปัญหาที่พบบ่อยและวิธีแก้

#### ปัญหา: Modal ไม่แสดง
**อาการ:** คลิกแล้วไม่เห็นอะไร

**ตรวจสอบ:**
```javascript
// ใน Console พิมพ์:
document.querySelector('[class*="z-[10000]"]')
// ถ้าได้ null = modal ไม่ถูก render
// ถ้าได้ element = ตรวจสอบ style
```

**แก้ไข:**
- ตรวจสอบว่า `selectedProperty` มีค่าหรือไม่
- ตรวจสอบว่า `isOpen` เป็น true หรือไม่

#### ปัญหา: Modal แสดงแต่เป็นหน้าจอดำ
**อาการ:** เห็นแค่ backdrop สีดำ

**ตรวจสอบ:**
```javascript
// ใน Console พิมพ์:
const content = document.querySelector('[class*="max-w-\\[1400px\\]"]');
console.log('Content:', content);
console.log('Content style:', content?.style.cssText);
console.log('Content opacity:', window.getComputedStyle(content).opacity);
```

**แก้ไข:**
- ตรวจสอบว่า GSAP animation ทำงานหรือไม่
- ตรวจสอบว่า `contentRef` ถูก attach หรือไม่

#### ปัญหา: Header หายไป
**อาการ:** เห็นแค่รูปภาพและ content ไม่เห็น header

**ตรวจสอบ:**
```javascript
// ใน Console พิมพ์:
const header = document.querySelector('[class*="border-b border-slate-100"]');
console.log('Header:', header);
console.log('Header visible:', header?.offsetHeight > 0);
```

**แก้ไข:**
- Scroll กลับไปด้านบน: `scrollContainerRef.current.scrollTop = 0`
- ตรวจสอบว่า header มี `flex-shrink-0`

#### ปัญหา: Content ทับซ้อน
**อาการ:** ข้อความทับกับรูปภาพ

**ตรวจสอบ:**
- ตรวจสอบ z-index ของแต่ละ layer
- ตรวจสอบว่า gallery มี fixed height หรือไม่
- ตรวจสอบว่า content section มี background สีขาว

### 5. Manual Testing Commands

```javascript
// Force open modal (ใน Console)
const modal = document.querySelector('[class*="z-[10000]"]');
if (modal) {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'auto';
}

// Force close modal
if (modal) {
  modal.style.display = 'none';
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
}

// Check property data
console.log('Selected property:', window.__selectedProperty);

// Scroll to top
const scrollContainer = document.querySelector('[class*="overflow-y-auto"]');
if (scrollContainer) scrollContainer.scrollTop = 0;
```

### 6. Network Issues

ตรวจสอบว่ารูปภาพโหลดได้หรือไม่:
- ไปที่ Network tab
- Filter: Img
- ดูว่ามี 404 errors หรือไม่

### 7. React DevTools

ถ้าติดตั้ง React DevTools แล้ว:
1. เปิด Components tab
2. หา PropertyDetailModal component
3. ดู props: `property`, `isOpen`, `onClose`
4. ดู hooks: refs, effects

## 🎯 Expected Behavior

### เมื่อคลิก Property Card:
1. SearchResultsModal ซ่อน (class `hidden` ถูกเพิ่ม)
2. PropertyDetailModal แสดง (display: flex, visibility: visible)
3. Backdrop fade in (0.4s)
4. Content slide up + fade in (0.6s)
5. Body scroll ถูก disable

### เมื่อคลิกปุ่ม X หรือ Backdrop:
1. Content slide down + fade out (0.3s)
2. Backdrop fade out (0.3s)
3. Modal ซ่อน (display: none, visibility: hidden)
4. Body scroll ถูก enable กลับมา
5. SearchResultsModal แสดงกลับมา

## 📝 Quick Fixes

### Fix 1: Modal ไม่เปิด
```typescript
// ใน SearchResultsModal.tsx
onClick={() => {
  console.log('Clicking property:', property);
  setSelectedProperty(property);
  console.log('After set:', property);
}}
```

### Fix 2: Animation ไม่ทำงาน
```typescript
// ตรวจสอบว่า GSAP loaded
console.log('GSAP:', typeof gsap);
```

### Fix 3: Refs ไม่ทำงาน
```typescript
// เพิ่ม useEffect เพื่อ debug refs
useEffect(() => {
  console.log('Refs:', {
    modal: modalRef.current,
    content: contentRef.current,
    overlay: overlayRef.current
  });
}, []);
```

## 🚀 Performance Tips

1. ใช้ `will-change: transform, opacity` สำหรับ animated elements
2. ใช้ `transform` แทน `top/left` สำหรับ animation
3. ใช้ `requestAnimationFrame` สำหรับ smooth scrolling
4. Lazy load รูปภาพที่ไม่ได้แสดงในหน้าจอแรก

## 📞 Need Help?

ถ้ายังมีปัญหา:
1. Copy console logs ทั้งหมด
2. Screenshot ของ Elements tab (DOM structure)
3. Screenshot ของ Network tab (ถ้ามี errors)
4. บอกขั้นตอนที่ทำก่อนเกิดปัญหา
