# BUG-13: POST /api/books буруу JSON эсвэл form body-д 400 биш 200 OK буцаана

Орчин:  Уншлагын жагсаалт v2.0, curl 8.7.1, Node v22.18.0, macOS 26.5.2, 2026-11-23  
Урьдчилсан нөхцөл: node app.js-ийг шинээр асаасан (анхны 3 ном)

## Дахин гаргах алхам
1. `curl -i -X POST localhost:3000/api/books -H 'Content-Type: application/json' -d '{"title": "abc",'`
2. `curl -i -X POST localhost:3000/api/books -H 'Content-Type: text/plain' -d 'hello'`
3. `curl -i -X POST localhost:3000/api/books -H 'Content-Type: application/x-www-form-urlencoded' -d 'title=Form&author=F&year=2000'`
4. `curl -i localhost:3000/api/books`

Хүлээгдэж байсан: «API: буруу JSON биетэй POST хүсэлтэд 400 алдаа буцаана.»  
Бодит үр дүн:     Алхам 1-3 бүгд `HTTP/1.1 200 OK`, `{"result":"OK"}`. Алхам 4-т ном нэмэгдээгүй (3 ном). Клиент амжилттай гэж ойлгох ч өгөгдөл чимээгүй алга болно.

Ноцтой байдал: Major. Буруу хүсэлт амжилттай мэт хариу авдаг тул клиентийн алдааг илрүүлэх боломжгүй.  
Хавсралт:      [evidence/bug-13-curl.txt](../evidence/bug-13-curl.txt)  
Олдсон аялал:  Saboteur
