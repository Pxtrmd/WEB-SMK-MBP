# Platform Digital Sekolah
## Menjalankan (lokal)
1. `docker compose up -d`
2. `cp .env.example .env` lalu isi AUTH_SECRET
3. `npm install && npm run dev`
## Status
- [x] Fase 1: Fondasi proyek
- [~] Fase 2: Skema database (skema + seed siap; migrasi dibuat dengan `npm run db:stages`)
- [ ] Fase 3-12: lihat roadmap

## Database (Fase 2)
```
docker compose up -d
npm install
npm run db:lint      # linter relasi (tanpa DB)
npm run db:stages    # validate + migrasi 5 tahap (DB harus kosong)
SEED_DEMO=true npm run db:seed
```
Detail model: `docs/DATABASE.md`.

## Dokumentasi
- `docs/WINDOWS_SETUP.md` - menjalankan & memvalidasi di Windows
- `docs/ENVIRONMENT.md` - semua variabel lingkungan
- `docs/DATABASE.md` - desain database
- `docs/PHASE2_REVIEW.md` - tinjauan Fase 2 (terverifikasi vs belum)
- `docs/PHASE3_PLAN.md` - rencana Fase 3
- `docs/PHASE4_REVIEW.md` - situs publik: hasil, terverifikasi vs belum, uji manual
- `docs/PHASE3_REVIEW.md` - hasil Fase 3: terverifikasi vs belum, daftar uji manual
