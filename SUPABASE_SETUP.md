# 🚀 Supabase Setup Guide (5 นาที)

## Step 1: สร้าง Supabase Project

1. ไปที่ https://supabase.com/
2. คลิก **"Start your project"** หรือ **"New Project"**
3. กรอกข้อมูล:
   - **Name:** `nest-properties`
   - **Database Password:** สร้างรหัสผ่านแข็งแรง (เก็บไว้!)
   - **Region:** Singapore (ใกล้ที่สุด)
   - **Pricing Plan:** Free (ฟรี 500MB database)
4. คลิก **"Create new project"**
5. รอ ~2 นาที

---

## Step 2: Enable PostGIS Extension

1. ใน Supabase Dashboard ไปที่ **"Database"** → **"Extensions"**
2. ค้นหา **"postgis"**
3. คลิก **"Enable"**
4. รอ ~10 วินาที

---

## Step 3: Run SQL Schema

1. ไปที่ **"SQL Editor"** (เมนูซ้าย)
2. คลิก **"New query"**
3. **Copy ทั้งหมด** จากไฟล์ `database-schema-postgis.sql`
4. **Paste** ลงใน SQL Editor
5. คลิก **"Run"** (หรือกด Ctrl+Enter)
6. รอ ~5 วินาที
7. ควรเห็น **"Success. No rows returned"**

---

## Step 4: Get Connection String

### วิธีที่ 1: Connection Pooler (แนะนำ)

1. ไปที่ **"Project Settings"** (เมนูล่าง)
2. คลิก **"Database"**
3. เลื่อนลงหา **"Connection string"**
4. เลือก **"Connection pooling"** → **"Transaction mode"**
5. Copy connection string ที่ขึ้นต้นด้วย:
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
   ```

### วิธีที่ 2: Direct Connection

1. เลือก **"Direct connection"** → **"URI"**
2. Copy connection string:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres
   ```

**⚠️ สำคัญ:** แทนที่ `[YOUR-PASSWORD]` ด้วยรหัสผ่านที่คุณสร้างใน Step 1!

---

## Step 5: Update Backend .env

แก้ไขไฟล์ `backend/.env`:

```env
# Supabase Database Connection
DATABASE_URL=postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

# Server Configuration
PORT=8000
```

**ตัวอย่างจริง:**
```env
DATABASE_URL=postgresql://postgres.abcdefgh:MySecurePass123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
PORT=8000
```

---

## Step 6: Verify Database

### ใน Supabase Dashboard:

1. ไปที่ **"Table Editor"**
2. ควรเห็นตาราง **"properties"**
3. คลิกเข้าไป ควรเห็นข้อมูล **13 rows** (mock data)

### ทดสอบจาก Backend:

```bash
# Restart backend
cd backend
bun run dev
```

ควรเห็น:
```
🗄️  Database: ✅ Connected
```

---

## Step 7: Test API

```bash
# Get featured properties
curl http://localhost:8000/api/properties/featured

# Search properties
curl -X POST http://localhost:8000/api/search \
  -H "Content-Type: application/json" \
  -d '{"listingType":"sale"}'
```

ควรได้ JSON response กลับมา!

---

## 🎉 เสร็จแล้ว!

ตอนนี้คุณมี:
- ✅ Supabase database (ฟรี 500MB)
- ✅ PostGIS enabled
- ✅ Mock data (13 properties)
- ✅ Backend connected

---

## 🔧 Troubleshooting

### Error: "connection refused"
- ตรวจสอบ connection string ใน `backend/.env`
- ตรวจสอบว่าแทนที่ `[YOUR-PASSWORD]` แล้ว
- ลอง restart backend: `bun run dev`

### Error: "password authentication failed"
- รหัสผ่านผิด
- ไปที่ Supabase → Settings → Database → Reset password

### Error: "relation properties does not exist"
- ยังไม่ได้ run SQL schema
- กลับไป Step 3 และ run อีกครั้ง

### ไม่เห็นข้อมูลใน Table Editor
- SQL script อาจมี error
- ดูใน SQL Editor ว่ามี error message อะไร
- ลอง run ทีละส่วน

---

## 📊 Supabase Free Tier Limits

- Database: 500 MB
- Bandwidth: 5 GB/month
- API requests: Unlimited
- Rows: Unlimited
- PostGIS: ✅ Supported

**เพียงพอสำหรับ MVP และ Prototype!**

---

## 🔐 Security Tips

1. **ไม่ commit `.env` ไป Git**
   - มี `.gitignore` อยู่แล้ว
   
2. **ใช้ Connection Pooler**
   - เร็วกว่า Direct connection
   - รองรับ concurrent connections มากกว่า

3. **Enable Row Level Security (RLS)**
   - ไปที่ Authentication → Policies
   - สร้าง policies สำหรับ production

---

## 📚 Next Steps

1. ✅ Database setup เสร็จแล้ว
2. ⏳ Start frontend
3. ⏳ Test search functionality
4. ⏳ Deploy to production

---

**ต้องการความช่วยเหลือ?**
- Supabase Docs: https://supabase.com/docs
- PostGIS Docs: https://postgis.net/docs/
