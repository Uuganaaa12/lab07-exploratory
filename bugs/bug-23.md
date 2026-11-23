# BUG-23: ~100000-аас олон номтой үед /api/stats серверийг унагана

Орчин:  Уншлагын жагсаалт v2.0, curl 8.7.1, Node v22.18.0, macOS 26.5.2, 2026-11-23  
Урьдчилсан нөхцөл: node app.js-ийг шинээр асаасан (анхны 3 ном)

## Дахин гаргах алхам
1. `node evidence/bulk-nemeh.js 100000` (API-аар 100000 ном нэмнэ, [bulk-nemeh.js](../evidence/bulk-nemeh.js))
2. `curl -i localhost:3000/api/stats`
3. `node evidence/bulk-nemeh.js 10000`
4. `curl -i localhost:3000/api/stats`

Хүлээгдэж байсан: Эрүүл ухаан: номын тоо өсөхөд статистик удааширч болох ч сервер унах ёсгүй.  
Бодит үр дүн:     Алхам 2 `{"total":100004,"newest":2008}`. Алхам 4 (110003 ном) `Empty reply from server`, терминалд `RangeError: Maximum call stack size exceeded` гарч сервер унана. Нүүр хуудас `/api/stats`-ийг дууддаг тул хуудас нээх бүрд ийм болно.

Ноцтой байдал: Major. Өгөгдөл өсөхөд апп бүрэн ажиллахаа больж бүх өгөгдөл алдагдана. 100 мянган ном нь энэ аппын хэвийн хэрэглээнээс их тул Critical биш.  
Хавсралт:      [evidence/bug-23-curl.txt](../evidence/bug-23-curl.txt)  
Олдсон аялал:  Saboteur (ачааллын хувилбар)
