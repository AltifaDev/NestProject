# 🚀 Quick Start Guide

## สถานะปัจจุบัน

✅ Backend server รันสำเร็จแล้วที่ http://localhost:8000
✅ ใช้ OpenStreetMap (ฟรี 100% ไม่ต้องบัตรเครดิต!)
⚠️  ยังไม่มี PostgreSQL database

---

## ขั้นตอนต่อไป

### 1. ติดตั้ง PostgreSQL + PostGIS

```bash
# macOS
brew install postgresql@15 postgis

# Start PostgreSQL
brew services start postgresql@15

# Verify installation
psql --version
```

### 2. สร้าง Database

```bash
# Create database
createdb nest_properties

# Enable PostGIS extension
psql nest_properties -c "CREATE EXTENSION postgis;"

# Import schema with mock data
psql nest_properties < database-schema-postgis.sql
```

### 3. ไม่ต้องทำอะไร! (Map ฟรีแล้ว)

✅ ใช้ **Leaflet + OpenStreetMap** แทน Mapbox
✅ ฟรี 100% ไม่มีข้อจำกัด
✅ ไม่ต้องสมัคร ไม่ต้องบัตรเครดิต
✅ Geocoding ด้วย Nominatim (ฟรี)

### 4. Start Frontend

```bash
npm run dev
```

เปิดเบราว์เซอร์: http://localhost:4321/search

---

## ทดสอบ API (หลัง setup database)

### Health Check
```bash
curl http://localhost:8000/
```

### Search Properties
```bash
curl -X POST http://localhost:8000/api/search \
  -H "Content-Type: application/json" \
  -d '{"listingType":"sale"}'
```

### Get Featured Properties
```bash
curl http://localhost:8000/api/properties/featured
```

### Nearby Search
```bash
curl "http://localhost:8000/api/properties/nearby?lat=13.7563&lng=100.5018&radius=5"
```

---

## ทางเลือกอื่น: ใช้ Supabase (ไม่ต้องติดตั้ง PostgreSQL)

ถ้าไม่อยากติดตั้ง PostgreSQL ในเครื่อง สามารถใช้ Supabase (Free tier):

1. สมัครที่ https://supabase.com/
2. สร้าง project ใหม่
3. ไปที่ SQL Editor
4. Paste โค้ดจาก `database-schema-postgis.sql`
5. Run query
6. Copy connection string
7. แก้ไข `backend/.env`:
```env
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
```

---

## Troubleshooting

### Backend ไม่ start
```bash
# Check port 8000
lsof -i :8000

# Kill process
kill -9 <PID>
```

### Database connection failed
```bash
# Check PostgreSQL status
brew services list

# Restart
brew services restart postgresql@15
```

### ไม่มี Homebrew
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## สรุป Architecture

```
┌─────────────────────────────────────┐
│  Frontend (Astro + React)           │
│  http://localhost:4321/search       │
└────────────┬────────────────────────┘
             │
             │ REST API
             ▼
┌─────────────────────────────────────┐
│  Backend (Bun + Elysia)             │
│  http://localhost:8000              │
│  ✅ Running                          │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│  PostgreSQL + PostGIS               │
│  ⚠️  Need to setup                   │
└─────────────────────────────────────┘
```

---

## Next Steps

1. ✅ Backend server running
2. ⏳ Setup PostgreSQL database
3. ⏳ Get Mapbox token
4. ⏳ Start frontend
5. ⏳ Test search functionality

---

**ต้องการความช่วยเหลือ?**
- อ่าน `SETUP_GUIDE.md` สำหรับคู่มือแบบละเอียด
- ดู error logs ใน terminal
- ตรวจสอบ `.env` configuration
