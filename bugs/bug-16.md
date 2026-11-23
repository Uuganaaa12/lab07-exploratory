# BUG-16: POST /api/books-д `null` body эсвэл текст болгох боломжгүй гарчиг/зохиолч илгээхэд сервер бүхэлдээ унана

Орчин:  Уншлагын жагсаалт v2.0, curl 8.7.1, Node v22.18.0, macOS 26.5.2, 2026-11-23  
Урьдчилсан нөхцөл: node app.js-ийг шинээр асаасан (анхны 3 ном)

## Дахин гаргах алхам
1. `curl -i -X POST localhost:3000/api/books -H 'Content-Type: application/json' -d 'null'`
2. `curl -i localhost:3000/api/stats`
3. Аппыг дахин асаагаад: `curl -i -X POST localhost:3000/api/books -H 'Content-Type: application/json' -d '{"title":{"toString":1,"valueOf":1},"author":"A","year":2000}'`

Хүлээгдэж байсан: «API: буруу JSON биетэй POST хүсэлтэд 400 алдаа буцаана.» Ямар ч хүсэлт серверийг унагах ёсгүй.  
Бодит үр дүн:     Алхам 1-д `curl: (52) Empty reply from server`, `node app.js`-ийн терминалд `TypeError: Cannot read properties of null (reading 'title')` гарч процесс зогсоно. Алхам 2 `Failed to connect`. Алхам 3-т мөн `TypeError: Cannot convert object to primitive value` гарч унана (`author`-т ижил объект өгөхөд ч). Өгөгдөл санах ойд байдаг тул бүх ном устна.

Ноцтой байдал: Critical. Нэг хүсэлтээр апп бүх хэрэглэгчид ажиллахаа больж, бүх өгөгдөл алдагдана.  
Хавсралт:      [evidence/bug-16-curl.txt](../evidence/bug-16-curl.txt) · [evidence/bug-16b-curl.txt](../evidence/bug-16b-curl.txt)  
Олдсон аялал:  Saboteur
