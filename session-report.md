# Session report

Тестер:    Д.Ууганбаяр (хөтөч ба curl дээрх үйлдлийг Claude Code гүйцэтгэсэн, доор «Саадууд»-ыг үз)
Огноо:     2026-11-23, 16:25 - 17:25 (60 мин)
Mission:   Уншлагын жагсаалт аппын чанарыг шинжлэх
Charter:   Ном нэмэх маягт, хүснэгт, хайлт, устгах, «Нийт ном» тоолуур, /api/books-ийг хоосон/буруу/хил дээрх оролт, урт ба тусгай тэмдэгт, curl-ээр шинжиж, спецификациас зөрсөн шалгалт, мессеж, тоолуур, UI эвдрэл, API статус кодын согог илрүүлэх. Аялал: Couch Potato, Antisocial, Saboteur, Supermodel, FedEx.

## Тэмдэглэл (он цагийн дарааллаар)

Session-ий явцад `session-notes.txt`-д бичсэн түүхий тэмдэглэл, засваргүй:

```
16:25  Session ehellee. App shineer asaasan (node app.js, anhnii 3 nom), Google Chrome 157 (Playwright-aar headed neej alham alhamaar), localhost:3000. 60 min, 17:25-d duusna
16:25  Ehlel: husnegted 3 nom, 'Niit nom: 4 · Hamgiin shine on: 2008'. Tooluur mortei taarahgui baina, FedEx hesegt shalgana
16:25  Couch Potato: 3 talbar hooson Nemeh -> 'Nom nemegdlee', garchig zohiolch hooson, on '0' mor nemegdlee. Aldaanii msg garaagui. BUG-01. ss: 01-buh-talbar-hooson.png
16:25  Couch Potato: API-d year:"" gej hadgalagdsan, UI Number("") -> 0 bolgoj haruulj baina (ajiglalt)
16:25  Couch Potato: zovhon garchig boglohod nemegdlee (zohiolch hooson, on 0). Nemsnii daraa garchigiin talbart 'Zovhon Garchig' uldsen, tseverlegdehgui. BUG-01-iin huvilbar. ss: 02-zovhon-garchig.png
16:26  Couch Potato: zovhon zohiolch -> mon nemegdlee, garchiggui mor. BUG-01-iin huvilbar. ss: 03-zovhon-zohiolch.png
16:26  Couch Potato: zovhon on 1985 -> garchig zohiolchgui mor nemegdlee. Dutuu talbar 3 tohioldol bugd orson. ss: 04-zovhon-on.png
16:26  Couch Potato: 3 talbart zovhon '   ' -> nemegdlee, API-d '   ' gej trim hiigdeegui hadgalagdsan, on 0. BUG-01-iin huvilbar. ss: 05-hooson-zai.png
16:26  Couch Potato: '  Zaitai Nom  ', ' 2001 ' -> urd hoino zai trim hiigdehgui hadgalagdlaa, on API-d ' 2001 ' tekst. UI 2,001 gej haruulna. Nemsnii daraa 3 talbar uurgelj utgaa hadgalsaar (ajiglalt)
16:27  Couch Potato: 'Nom nemegdlee' msg 'Bugd' darsan ch uldene, zovhon refresh hiihed arilna. Refresh-iin daraa ogogdol hevee (11 tooluur)
16:27  Couch Potato: Tab daraalal Garchig -> Zohiolch -> On -> Nemeh -> Hailt, zov
16:27  Couch Potato: on talbart Enter darahad yu ch bolohgui (form baihgui). Tab-aar Nemeh tovch deer ochij Enter darval nemegdene. Ajiglalt
16:27  Couch Potato: hooson moruud ba zovhon zaitai mor nudend yalgagdahgui, ali ni yamar nom gedgiig medehgui (ajiglalt). Rows 11, 'Niit nom: 12'. ss: 06-couch-hooson-moruud.png
16:28  Couch Potato: talbar tseverlegdehgui tul Nemeh-g dahin darahad ijil nom 3 udaa nemegdlee ('Dahin Darah' x3). Davhardal shalgahgui + talbar tseverlehgui hoyr hamt. BUG-02. ss: 07-dahin-darah-3-davhar.png
16:28  Couch Potato: hooson moriig Ustgah -> ustgagdsan, gehdee msg 'Nom nemegdlee' gej garlaa. Batalgaajuulah asuult baihgui shuud ustgana. BUG-03. ss: 08-ustgahad-nemegdlee-msg.png
16:28  Couch Potato: hooson 3 moriig ustgav, msg bur 'Nom nemegdlee'. Couch Potato duussan. Antisocial (on) ruu shiljiv: 999, 1000, 2100, 2101
16:28  Antisocial (on): 999 -> nemegdlee, '999' (taslalgui). 1000-aas baga on huleen avagdsan. BUG-04. ss: 09-on-999.png
16:28  Antisocial (on): 1000 -> nemegdlee (hil, zov), gehdee '1,000' taslaltai
16:29  Antisocial (on): 2100 -> nemegdlee (hil, zov). 'Hamgiin shine on: 2100' bolson
16:29  Antisocial (on): 2101 -> nemegdlee, 'Hamgiin shine on: 2101' bolj tooluurt orson. Deed hil shalgagdahgui. BUG-04-iin huvilbar. ss: 10-on-2101.png
16:29  Antisocial (on): 1999.5 -> nemegdlee, husnegted '1,999.5'. Butarhai on shalgagdahgui. BUG-04-iin huvilbar. ss: 11-on-butarhai.png
16:29  Antisocial (on): -5 -> nemegdlee, '-5'. Sorog on shalgagdahgui. BUG-04-iin huvilbar
16:29  Antisocial (on): 0 -> nemegdlee '0'. Hooson ontoi mor bas '0' gej haragddag tul hoyr ni yalgagdahgui (ajiglalt)
16:30  Antisocial (on): 'abc' -> nemegdlee, husnegted 'NaN'. Too bish on huleen avagdsan. BUG-04-iin huvilbar. ss: 12-on-abc-NaN.png
16:30  Antisocial (on): '1e3' -> API-d '1e3' tekst hadgalagdaj UI '1,000' gej haruulna, oruulsan utgaas oor. BUG-04-iin huvilbar. Jagsaaltyn on duussan, 'Hamgiin shine on' yaj tootsooldog gedgiig gunzgiiruulne
16:30  Antisocial (on): '1e4' -> nemegdlee, husnegt '10,000', 'Hamgiin shine on: 10000'. Server on-iig Number()-eer harsan, gehdee hyazgaar shalgahgui. BUG-04-iin huvilbar. ss: 13-on-1e4-shine-10000.png
16:30  Antisocial (on): '99999999999999999999' -> '100,000,000,000,000,000,000' gej oorchlogdoj haragdana (oruulsnaas oor too), 'Hamgiin shine on: 100000000000000000000'. BUG-04-iin huvilbar. ss: 14-on-20-oron.png
16:31  Antisocial (on): 'Infinity' -> husnegted '∞', tooluur 'Hamgiin shine on: null' gej evderlee. /api/stats newest:null. BUG-05. ss: 15-on-infinity-null.png
16:31  Antisocial (on): Infinity moriig ustgahad tooluur sergej 'Hamgiin shine on: 100000000000000000000' bolloo
16:31  Antisocial (on): '02000' -> '2,000'; fullwidth '２０２０' -> NaN; '2 000' -> NaN. Bugd 'Nom nemegdlee'. BUG-04-iin huvilbar
16:31  Antisocial (on): '0x7E4' (16-tiin too) -> '2,020' gej haragdlaa. On talbar type=text (number bish), maxlength baihgui, yamar ch tekst avna. BUG-04-iin huvilbar. ss: 16-on-hex-0x7E4.png
16:31  Antisocial (tekst, davhardal) ruu shiljiv: ehleed ijil nom 2 udaa
16:31  Antisocial: yag ijil 'Clean Code / Robert C. Martin / 2008' -> davhar nemegdlee, hailtaar 2 mor garna. BUG-06. ss: 17-davhar-ijil.png
16:32  Antisocial: 'clean code / ROBERT C. MARTIN' ba 'Clean Code ' (ard zai) -> hoyulaa nemegdlee. Odoo Clean Code 4 mor. BUG-06-iin huvilbar. ss: 18-davhar-tom-jijig-zai.png
16:32  Antisocial: 500 temdegt 'AAA...' garchig -> nemegdlee. Husnegt bugd hevtee sunaj, buh moriin Zohiolch, On, Ustgah baganuud delgetsees garsan. Urt hyazgaar baihgui. BUG-07. ss: 19-urt-garchig-500.png
16:33  Antisocial: zaitai 500 temdegt garchig ('Nom Nom ...') -> mor shiljij 8 mor bolj bagtana, Ustgah haragdana. Asuudal zovhon zaigui urt ugend. ss: 20-urt-garchig-zaitai.png
16:33  Antisocial: '100,000,000,000,000,000,000' ontoi mor On baganyg ugurgusgej Ustgah baganyg tairsan (19-iin omnoh delgetsend). On hyazgaargui baigaagiin ur dagavar
16:33  Antisocial: '<b>x</b>' garchig -> husnegted '&lt;b&gt;x&lt;/b&gt;' gej haragdana. API-d '&lt;b&gt;...' gej escape hiigdsen hadgalagdsan, UI dahin escape hiideg (davhar escape). Hailt 'x</b>' -> 0, '&lt;b' -> oldloo. BUG-08. ss: 21-tusgai-b-tag.png
16:33  Antisocial: '<script>alert(1)</script>' -> alert garaagui (XSS baihgui), husnegted '&lt;script&gt;...' gej haragdana. BUG-08-iin huvilbar. ss: 22-tusgai-script.png
16:34  Antisocial: zohiolchid '<img src=x onerror=alert(1)>' -> alert garaagui, mon '&lt;img...' gej haragdana. Zohiolch talbar ch davhar escape-tei
16:34  Antisocial: emoji '📚 Ном 😀', 'Эмоджи 👍' -> zov haragdlaa. Hashilt ' " zov. Gehdee '&' -> '&amp;' bolj haragdana ('Tom &amp; Jerry'). Anhnii 'D.Thomas & A.Hunt' zov haragdana, shine nom l buruu. BUG-08-iin huvilbar. ss: 23-tusgai-quote-amp.png
16:35  Antisocial: hailt 'Tom & Jerry' -> 0 mor (hadgalsan ni 'Tom &amp; Jerry'), 'D.Thomas & A' -> oldloo. Shineer nemsen '&'-tai nomyg hailtaar olohgui. BUG-08-iin ur dagavar. ss: 24-hailt-amp-oldohgui.png
16:35  Hailt ruu shiljiv: clean / CLEAN / Clean
16:36  Antisocial (hailt): 'clean' -> zovhon 'clean code' (1), 'CLEAN' -> 0, 'Clean' -> 3. Tom/jijig useg yalgana, neg nomyg 3 ondoo ur dun. BUG-09. ss: 25-hailt-CLEAN-0.png
16:36  Antisocial (hailt): heseg ug 'Prag', 'gram' -> oldloo. Zohiolchoor 'Martin' -> 3 (gehdee 'ROBERT C. MARTIN' oldohgui). Kirill 'Лодой' -> oldloo, 'лодой' -> 0. Kirill ch tom/jijig yalgana. BUG-09-iin huvilbar
16:37  Antisocial (hailt): hooson hailt -> buh nom (zov). 'zzzqqq' -> hooson husnegt, 'oldsongui' msg baihgui. BUG-10. '2008' -> 0, onoor hailt hiigdehgui (ajiglalt). ss: 26-hailt-oldohgui.png
16:37  Antisocial (hailt): '   ' (3 zai) -> '  Zaitai Nom  ' oldloo, aliv talbart 3 zai baihgui. Shalgahad hailt garchig + ' ' + zohiolch-iig zalgaj haij baina: 'Test M' -> 'Msg Test | M', 'Code Robert' -> Clean Code. Talbar hoorondiin zaagaar huurmag ur dun. BUG-11. ss: 27-hailt-talbar-zaagaar.png
16:38  Antisocial (hailt): '.*', '[', '%', 'C.ean' -> 0, '(' -> zovhon '(' aguulsan nom. Regex bish engiin tekst hailt, server 200, aldaa garaagui (zov)
16:38  FedEx ruu shiljiv: neg nomyg nemehees ustgah hurtel dagaj, alham bureer 'Niit nom' ba husnegtiin moriig tooloh
16:38  FedEx: odoo husnegt 34 mor, GET /api/books 34, /api/stats total 35. Tooluur +1 aldaa server-iin stats endpoint-d baina. BUG-12
16:38  FedEx: 1) 'FedEx Ilgeemj' nemeh -> 35 mor, 'Niit nom: 36'. +1 hevee
16:38  FedEx: 2) hailt 'FedEx' -> 1 mor, 'Niit nom: 36' hevee (hailtiin ur dungiin too haragdahgui). ss: 28-fedex-hailt.png
16:39  FedEx: 3) hailtiin ur dungees ustgahad msg 'Nom nemegdlee' (BUG-03), husnegt buh 34 nom ruu butsav, hailtiin talbart 'FedEx' uldsen (hailt idevhtei met haragdana). 'Niit nom: 35', API 34. ss: 29-fedex-ustgasan.png
16:39  FedEx: buh nomyg UI-aar neg negeer ustgaj tooluur 0 bolohyg shalgana
16:40  FedEx: 4) buh nomyg ustgahad husnegt hooson, gehdee 'Niit nom: 1 · Hamgiin shine on: 0'. Tooluur 0 bolohgui, 'nom baihgui' gesen msg ch baihgui. Alham bureer mor+1 togtmol. BUG-12. ss: 30-buh-ustgasan-tooluur.png
16:40  FedEx: hooson jagsaaltad 'Ganc Nom' nemehed 1 mor, 'Niit nom: 2'. +1 togtmol
16:40  FedEx: 'Refresh Nom' nemeed huudsyg refresh -> 2 nom uldsen, tooluur hevee (zov). Refresh msg, talbaruudyg tseverlene. ss: 31-refresh-daraa.png
16:40  FedEx: Garchig, On talbart Enter -> nemegdehgui, yu ch bolohgui. Ajiglalt (form/keydown baihgui)
16:40  FedEx: hailtiin talbart 'Ganc' bichij Enter -> hailt hiigdehgui, 2 mor hevee. Hailt zovhon tovchoor (ajiglalt)
16:41  FedEx: Nemeh tovchiig hurdan 2 udaa (double click) -> 'Double Nom' 2 mor nemegdlee. Tovch ilgeej baih uyed idevhgui bolohgui. BUG-02-iin huvilbar. ss: 32-nemeh-2-udaa.png
16:41  FedEx: 2 tab neej tab1-d nom nemehed tab2 huuchin jagsaalt, huuchin tooluurtai uldene (avtomat shinechlegdehgui). Tab2 deer ustgahad shine jagsaalt achaalagdana. Ajiglalt, ogogdol aldagdaagui. ss: 33-tab2-hutsrsan.png
16:41  FedEx duussan. Saboteur (curl) ruu shiljiv: UI-g algasaj /api/books ruu shuud
16:41  Saboteur: GET /api/books -> 200, JSON. UI-aas nemsen year bugd tekst ('2010'), anhnii nomnuud too (1971). Torol holildson (ajiglalt). evidence/01-get-books.txt
16:41  Saboteur: buruu JSON '{"title": "abc",' -> 400 bish 200 {"result":"OK"}, gehdee nom uusegdeegui (4 hevee). Aldaag nuuj amjilttai gej hudal hariulna. BUG-13. evidence/02-buruu-json.txt
16:41  Saboteur: '{}' -> 201 Created id 47, title/author '' , year talbar ogt baihgui nom uuslee. API-d zaaval talbar shalgalt baihgui. BUG-01-iin API tal. evidence/03-hooson-obj.txt
16:42  Saboteur: year:"hello" -> 201 Created. UI-d '{}' mor ba 'hello' mor 2 ulaa 'NaN' on-toi. (UI-aas hooson on -> 0, API-aas year baihgui -> NaN, ondoo). BUG-04-iin API tal. evidence/04-year-hello.txt, ss: 34-api-moruud-NaN.png
16:42  Saboteur: DELETE /api/books/999 (baihgui) -> 404 bish 200 OK. Id 48-iig 2 udaa ustgahad hoyulaa 200 OK. Ustgah endpoint ug ni baigaa esehiig shalgahgui. BUG-14. evidence/05-delete-999.txt, 05b-delete-48-2udaa.txt
16:42  Saboteur: GET /api/books/1 (UI-aar ustgasan) -> 404, gehdee GET /api/books/42 (baigaa nom) -> mon 404. Neg nom avah endpoint baihgui. DELETE /abc -> 404, harin /999 -> 200: niitslel baihgui (ajiglalt). evidence/06-get-1.txt, 06b-get-42.txt, 06c-delete-abc.txt
16:42  Saboteur: PUT /api/books/42, PATCH /api/books/42, PUT /api/books -> bugd 404 ERROR_NOT_FOUND. Zasah endpoint baihgui, method demjigdehgui ued 405 bish 404 (ajiglalt). evidence/07-put-42.txt, 07b-patch-42.txt, 07c-put-books.txt
16:42  Saboteur: GET /old -> 500 'Internal Server Error'. /old/ -> 404 JSON, baihgui huudas -> 404 JSON (HTML bish). Server konsold 500-iin aldaa ogt bichigdeegui. BUG-15. evidence/08-old.txt, 08b-old-slash.txt, 08c-404.txt
16:43  Saboteur: Content-Type text/plain 'hello' -> 200 OK, nom uusegdeegui (BUG-13-iin huvilbar). Client 'id':42 ilgeehed toomsorloogui, shine id 49 ogson (zov). evidence/09-text-plain.txt, 09b-id-dawhar.txt
16:43  Saboteur: title:123, author:["a","b"], year:{"y":1} -> 201. title '123', author 'a,b' bolj horvuulegdsen, year obyekt-oor hadgalagdsan. Torol shalgahgui. BUG-04-iin API tal. evidence/09c-torol.txt, ss: 35-api-torol-obyekt.png
16:43  Saboteur: /api/stats total 8, GET /api/books 7. +1 dahin batlagdav (BUG-12). evidence/10-stats.txt
16:43  Saboteur: 100000 temdegttei title API-aar -> 201 Created, hemjeenii hyazgaar baihgui. BUG-07-iin API tal. evidence/11-tom-body.txt
16:43  Saboteur: 100000 temdegttei garchig UI-d husnegtiig sunaj buh moriin Zohiolch/On/Ustgah alga bolgoson. UI-aar ustgah tovch haragdahgui. ss: 36-api-100k-garchig.png
16:43  Saboteur: ?q=Ganc&q=Tab1 -> ehnii q-r haisan (200, 1 nom). /api/books/ (ard slash) -> 404. DELETE /api/books (id-gui) -> 404, buh nom ustaagui (zov). evidence/12-q-davhar.txt, 12b-books-slash.txt, 12c-delete-books.txt
16:44  Saboteur: 20 POST zereg ilgeehed 20 nom, id davhtsaagui, total 28 (27+1). Zereg ajillagaa zov. evidence/13-zereg-20-post.txt
16:44  Saboteur: POST body 'null' (Content-Type json) -> curl hariu avaagui, server bugdeeree UNTARLAA. Konsold 'TypeError: Cannot read properties of null (reading title)' app.js:130. Neg huseltaar app zogsono. BUG-16 (hamgiin notstoi). evidence/14-body-null.txt
16:44  App-g dahin asaav. Ogogdol sanah oind baisan tul bugd aldagdaj anhnii 3 nom ruu butsav (tooluur 4). Untarval hereglegchiin buh nom aldagdana
16:44  Saboteur: body '[]' -> 201 Created, hooson nom uuslee. Server amid. evidence/15-body-array.txt
16:44  Saboteur: body '"abc"' ba '5' -> 201 Created hooson nom, server amid. Zovhon null untraadag. evidence/16-body-string.txt, 16b-body-number.txt
16:44  Saboteur: null body-g 2 dahi udaa ilgeehed dahin untarlaa (curl exit 52, stats 000). 100% davtagdana. App-g dahin asaav, anhnii 3 nom. evidence/14-body-null.txt
16:45  Saboteur: ?q=% (buruu percent-encoding) -> 200 [], server amid (zov). evidence/17-q-percent.txt
16:45  Saboteur duussan. Supermodel (gadaad torh) ruu shiljiv. App dahin asaasan tul tseverhen 3 nomtoi baidal deer harna
16:45  Supermodel: 'Nemex' tovchnii suuliin useg kirill 'х' bish latin 'x'. Nudend ijil, gehdee tekst hailt/screen reader-t buruu. BUG-17. ss: 37-supermodel-undsen.png, evidence/32-nemeh-latin-x.txt
16:45  Supermodel: Ustgah tovch nogoon (rgb 44,122,75), Nemeh-tei adil 'eyreg' ongo. Ustgah uildeld ulaan/anhaaruulah ongo baih yostoi. BUG-18. ss: 37-supermodel-undsen.png, evidence/33-ongo-kontrast.txt
16:45  Supermodel: on '1,971', '2,008' myngatyn taslaltai (toLocaleString en-US). On taslalgui baih yostoi. BUG-19. ss: 37-supermodel-undsen.png
16:45  Supermodel: input-uudad label baihgui, zovhon placeholder. Footer saaral #888 tsagaan deer kontrast 3.54:1, Hailt/Bugd tovch 4.19:1 (WCAG 4.5:1-ees baga). Ajiglalt. evidence/33-ongo-kontrast.txt
16:46  Supermodel: 375px orgond bagtaj baina, gehdee zuun, baruun tald zai (padding) baihgui, tekst delgetsiin irmeg deer naaldsan. ss: 38-mobile-375.png
16:46  Supermodel: 320px orgond husnegt bagtahgui, Ustgah tovchnuud baruun tald taslagdsan. HTML-d viewport meta baihgui. BUG-20. ss: 39-mobile-320.png
16:46  Supermodel: footer 'Huuchin huvilbar' link darahad 'Internal Server Error' tsagaan huudas, butsah link ch baihgui. Server untraagui. BUG-15 UI tal. ss: 40-huuchin-huvilbar-500.png
16:46  Supermodel: msg bur ijil 'Nom nemegdlee' (nemeh, ustgah), ijil ongo (h1-tei adil hoh). Aldaa/amjilt yalgah ongo, aldaanii msg ogt baihgui. Ajiglalt. ss: 41-msg-ongo.png
16:47  Supermodel: Tab-aar tovch deer ochihod tsenher focus huree haragdana (zov). ss: 42-focus-nemeh.png, 43-focus-hailt.png
16:47  Supermodel: hamgiin shine (2020) nomyg ustgahad 'Hamgiin shine on: 2008' bolj zov shinechlegdlee
16:47  Davtan shalgalt ehellee: BUG bureer tseverhen ogogdol deer hamgiin bogino alhamaar davtagdah esehiig batalna
16:47  Davtan: BUG-01 hooson 3 talbar -> dahin nemegdlee. Davtagdana
16:47  Davtan: BUG-02 Nemeh double click -> 'Davtan Dbl' 2 nom (API-d 2). Davtagdana. BUG-03 ustgahad 'Nom nemegdlee' msg -> davtagdana
16:48  Davtan: BUG-04 on 2101 nemegdlee, BUG-05 'Infinity' -> 'Hamgiin shine on: null' dahin garlaa. Davtagdana
16:48  Davtan: BUG-06 'Clean Code' davhar nemegdlee, BUG-09 'clean' -> 0, BUG-10 msg garahgui. Davtagdana
16:48  Davtan: BUG-08 'A & B <i>' -> 'A &amp; B &lt;i&gt;', hailt 'A & B' -> 0. BUG-11 'Code Robert' -> Clean Code olddog. Davtagdana
16:48  Davtan: BUG-07 300 temdegt 'WWW...' -> husnegt sunlaa. BUG-12 API 10, stats total 11. Davtagdana. ss: 44-davtan-urt.png
16:48  Davtan: BUG-13 buruu JSON -> 200, BUG-14 DELETE /777 -> 200, BUG-15 /old -> 500. Davtagdana. BUG-16 omno 2 udaa davtagdsan, BUG-17..20 togtmol haragdah zuil
16:48  BUG-16-iin shaltgaan app.js:130 'esc(data.title)' tul title-iig tekst bolgoh ued aldaa gargah busad utgaar untrah esehiig shalgana
16:49  Saboteur (davtan): title:{"toString":1,"valueOf":1} -> server dahin UNTARLAA. 'TypeError: Cannot convert object to primitive value' app.js:14 esc(). null-ees oor 2 dahi zam. POST handler-t aldaa barih (try/catch) baihgui. BUG-16-iin huvilbar. evidence/18-title-obyekt.txt
16:49  Ajiglalt: app.js:14 esc() server tald baigaa ni BUG-08 (davhar escape)-iin shaltgaan gedgiig batalj baina. App-g dahin asaav, anhnii 3 nom
16:49  Saboteur (davtan): year:{"toString":1,"valueOf":1} -> POST 201 Created amjilttai, GET /api/books 200, gehdee daraagiin GET /api/stats -> server UNTARLAA (app.js:116 Number(b.year)). Hadgalagdsan ogogdol hojim untraadag. BUG-21. evidence/19-year-obyekt-stats.txt
16:49  Ajiglalt: app.js:116 'Number(b.year) || 0' -> 'abc' 0 bolno, Infinity Math.max-d orj JSON null bolno (BUG-05-iin shaltgaan)
16:50  Saboteur (davtan): deerh year obyekt-toi nomyg curl-aar nemeed UI neehed husnegt bugd HOOSON, tooluur alga, aldaanii msg baihgui. Brauzer konsold 'Cannot convert object to primitive value' (render() Number(b.year)). Refresh hiisen ch hevee. Server unaagui, gehdee neg muu bichlegees bolj buh hereglegchid jagsaalt haragdahgui. BUG-21-iin UI tal. ss: 45-ui-jagsaalt-alga.png, 46-refresh-ch-hooson.png
16:50  BUG-21-iin muu nomyg API-aar ustgahad UI sergej 3 nom, tooluur 4 bolloo
16:51  Saboteur: DELETE /api/books/5xyz -> 404 (zovhon too huleen avna, zov). DELETE /api/books/05 -> id 5 ustgagdlaa (too bolgoj unshdag, ajiglalt). evidence/20-delete-id-parse.txt
16:51  Saboteur: OPTIONS /api/books, HEAD /api/books, POST /api/stats -> bugd 404. GET ajilladag zam deer HEAD 404, method buruu uyed 405 bish 404 (ajiglalt). evidence/21-options.txt, 21b-head.txt, 21c-post-stats.txt
16:51  BUG-16/21-ees uudsen sanaa: server untarsan uyed UI yaj haragdahyg shalgana (server-g zogsooj Nemeh, Ustgah darna)
16:51  Server untarsan uyed Nemeh -> yamar ch msg garahgui, husnegt huuchnaaraa, konsold 'Failed to fetch' barigdaagui aldaa. Hereglegch nemegdsen esehiig medehgui. BUG-22. ss: 47-server-untarsan-nemeh.png
16:52  Server untarsan uyed Ustgah, Hailt -> mon msg-gui, husnegt oorchlogdohgui, 'Hailt Clean' hiisen ch 3 nom hevee haragdana (hailt hiigdsen met huurmag). BUG-22-iin huvilbar. ss: 48-server-untarsan-hailt.png
16:52  App-g dahin asaav (anhnii 3 nom)
16:52  Ihdeh: API-aar 1000 nom nemev (70ms). UI 1003 mor achaalna, 'Bulk 99' hailt 11 mor ~0.7s. Hevtee (ajiglalt). Daraa ni app.js:116 Math.max(...books) olon nom deer stack hetreh esehiig 130000 nomoor shalgana. ss: 49-1000-nom-hailt.png
16:53  Ihdeh: 130000 nom nemsnii daraa GET /api/stats -> server UNTARLAA 'RangeError: Maximum call stack size exceeded' app.js:116 Math.max(...). Nom olon bolohod app ajillahaa bolino. BUG-23. evidence/22-130k-stats.txt
16:53  Ihdeh: hyazgaar: 100001 nom -> stats 200, 110001 nom -> dahin untarlaa (RangeError). Oiroltsoogoor 100-110 myangan nom deer app evderne (Node stack-aas hamaarna). BUG-23 davtagdana. App-g dahin asaav. evidence/22-130k-stats.txt
16:53  Saboteur: Content-Type shalgagdahgui: x-www-form-urlencoded ba text/plain-aar JSON ilgeehed 201 nemegdlee (415 baih yostoi). Form body 'title=Form&...' -> 200 OK, nemegdeegui (BUG-13). evidence/23-content-type-form.txt, 23b-form-body.txt, 23c-text-plain-json.txt
16:53  Ajiglalt: text/plain + oor Origin-toi huselt ch huleen avagdsan. Oor sait-aas form-oor nom nemeh (CSRF) bolomjtoi baij magadgui, CORS header baihgui
16:54  OCD: Ustgah double click -> zovhon 1 nom ustgagdlaa. Ijil bairlald 0.4s, 1.2s zaitai 2 tovshihod mon 1-hen ustgagdsan: ehnii darald 'Nom nemegdlee' msg garch husnegtiig ~30px dooshluulj, 2 dahi daralt hooson gazar onoson. Hoorondoh nomyg ustgaagui (zov), gehdee layout shift baina (ajiglalt). ss: 50-ustgah-2-tovshih.png
16:55  Hailt 'Form' -> 'Bugd' darahad buh nom haragdana, gehdee hailtiin talbart 'Form' uldene (husnegt ba talbar zorj baina). Hailtiin dund nom nemehed hailt aldagdaj buh jagsaalt garna. Ajiglalt. ss: 51-bugd-hailt-ug-uldsen.png
16:55  Supermodel: /favicon.ico -> 404 JSON, brauzer tab-d ikon baihgui. On bagana zuun tiish zeregtssen (too baruun tiish baival unshihad amar). Ajiglalt. evidence/24-favicon.txt
16:56  Saboteur: year:[2050] -> 201, 'Hamgiin shine on: 2050', husnegted '2,050'. year:true -> 201, husnegted '1'. Massiv, boolean on hoyulaa too bolj horvuulegdene. BUG-04-iin API tal. evidence/25-year-massiv.txt, 25b-year-true.txt, ss: 52-year-massiv-bool.png
16:57  Antisocial (on): husnegted haragddag helbereer '2,008' gej bichihed -> 'NaN'. App ooroo haruulsan formatyg huleen avahgui, gehdee nemchihne. BUG-19 ba BUG-04 hamt. ss: 53-on-taslaltai-oruulsan.png
16:57  Antisocial (on): 'хоёр мянга' (useg), '٢٠٠٠' (arab too) -> 2ulaa NaN-aar nemegdlee. BUG-04-iin huvilbar
16:57  Antisocial (uzegdehgui temdegt): RTL override (U+202E) + 'edoC naelC' -> husnegted yag 'Clean Code' met haragdana, gehdee hailt 'Clean Code', 'Clean' -> oldohgui. Zero-width space-tei 'Clean<ZWSP>Code' -> 'CleanCode' haragdana, 'Clean Code' hailtaar oldohgui. Uzegdehgui temdegt shuugdehgui, huurmag ner uusgej bolno. BUG-24. ss: 54-uzegdehgui-temdegt.png
16:58  Ihdeh: 50000 nom -> UI 50010 moriig neg dor zurna, achaalal ~5.4s (1000 nom deer ~3.7s, Chrome neeh hugatsaa oroltsson), hailt 111 mor ~1.9s. Huudaslalt (pagination) baihgui. Ajiglalt. ss: 55-50000-nom.png
16:58  App-g zogsooj dahin asaav, anhnii 3 nom
16:58  Antisocial (hailt): 20000 temdegttei hailt -> server 431 Request Header Fields Too Large, UI-d msg-gui, konsold 'Unexpected end of JSON input', husnegt 3 nomoo haruulsaar (hailt taarsan met huurmag). Hailtiin talbar maxlength baihgui, UI aldaa barihgui. BUG-22-iin huvilbar. ss: 56-urt-hailt-431.png, evidence/26-urt-hailt.txt
16:59  Eyreg: bodit nom '1984 / George Orwell / 1949', 'Монголын нууц товчоо / 1240', 'Хүний мөр / Б.Ринчен / 1951' -> zov nemegdej, garchig, heseg ug, zohiolchoor oldloo. Too garchig ('1984') zov haragdana. Gehdee on '1,949', '1,240' taslaltai (BUG-19). ss: 57-bodit-nomnuud.png
16:59  FedEx (bodit): '1984'-iig UI-aar ustgahad hailt '1984' -> 0, jagsaaltaas alga, tooluur 7 -> 6 (5 mor, +1 hevee). Ustgah ooroo zov ajillana. Ajiglalt: nomyg zasah (edit) bolomj baihgui, aldaa garval ustgaj dahin nemeh yostoi
17:00  Saboteur: '__proto__':{title} -> 201, title '' (prototype-oos unshaagui, zov), server amid. Gants surrogate '\ud800 Gants' -> 201, server amid. evidence/27-proto.txt, 27b-surrogate.txt
17:00  Ajiglalt: app dahin asaahad id 4-oos dahin ehelne (16:53-d FormCT id 4 avsan). Omno ni oor nomond baisan id shine nomond dahin ogogdono
17:01  Supermodel (huremjtei baidal): aria snapshot - textbox nered placeholder-oos ('Garchig'...), Ustgah tovch bur ijil 'Ustgah' ner, ali nomyg ustgahyg zaagaagui. 4 dahi baganyn tolgoi hooson. #msg aria-live/role baihgui tul 'Nom nemegdlee' screen reader-t unshigdahgui. Ajiglalt
17:01  Nemelt: JavaScript untraasan brauzert husnegt hooson, tooluur hooson, <noscript> msg baihgui. Hereglegch yagaad hooson baigaag medehgui. Ajiglalt. ss: 58-js-untraasan.png
17:01  Saboteur: huudasny header-t CSP, X-Content-Type-Options, X-Frame-Options zereg hamgaalaltyn header baihgui (ajiglalt, XSS-iig server escape-eer l haaj baina). evidence/28-header.txt
17:02  Davtan: BUG-24 RTL 'edoC naelC' dahin 'Clean Code' met haragdaj, 'Clean Code' hailtaar zovhon jinhene ni oldloo. Davtagdana. Gants surrogate garchig '� Gants' gej haragdana. ss: 59-surrogate-rtl-davtan.png
17:04  OCD (hailt race): 50000 nom nemeed 'Bulk' (50000 ur dun) hailtyn daraa shuud 'Ринчен' hailt -> talbart 'Ринчен' baihad husnegt 'Bulk' 50000 mor haruulna. Hariu daraallaaraa irsen ch tom JSON-iig unshij duusah udaan tul Bulk-iin render hamgiin suuld hiigdene. 2 udaa davtagdsan. 0.3s zaitai darahad zov (tom render huudsyg tugjiij 2 dahi daraltyg huleelgesen). Zovhon heteh hurdan 2 hailt hiihed garna, notstoi bish. BUG-25. ss: 60-hailt-race.png, 61-hailt-race-davtan.png, 62-hailt-race-300ms.png
17:04  Ihdeh: ~50000 nom: GET /api/books 2.9MB 0.024s, /api/stats 0.002s, hailt 0.04s. Server tal hurdan, UI-iin udaashral (5.4s) ni 50000 moriig neg dor zurahaas. Ajiglalt. evidence/29-50k-hurd.txt
17:05  App-g zogsooj dahin asaav (anhnii 3 nom). Haaltyn smoke: hevein urgal (nemeh -> hailt -> ustgah)
17:05  Haaltyn smoke: 'Smoke Nom' nemeh -> hailtaar oldloo -> ustgah -> hailtaar oldohgui, buh jagsaalt anhnii 3 nom. Undsen urgal ajillana, gehdee BUG-03 (msg), BUG-12 (+1), BUG-19 (taslal) hevee. ss: 63-haaltyn-smoke.png
17:05  FedEx (2 tab): tab1-d 'Clean Code' ustgasan, tab2 hutsrsan jagsaaltaas mon 'Clean Code' Ustgah -> 'Nom nemegdlee' msg, aldaa/anhaaruulga baihgui, jagsaalt shinechlegdlee. Busad nom ustaagui (zov). BUG-14-iin hereglegchid haragdah tal, BUG-03. ss: 64-hutsrsan-tab-ustgah.png
17:06  Saboteur: title-d \n, \t, \u0000 udirdah temdegt API-aar -> 201, server amid. UI-d 'Mor1 Mor2 TabNull' gej neg mor haragdana (null temdegt uzegdehgui). Delgets deer haragdsanaar 'Mor1 Mor2' gej haihad 0 (hadgalsan ni \n). Udirdah temdegt shuugdehgui. BUG-24-iin huvilbar. evidence/30-udirdah-temdegt.txt, ss: 65-udirdah-temdegt.png
17:07  Supermodel: iPhone 13 emulyats (isMobile) -> viewport meta baihgui tul huudas 980px orgontoi desktop baidlaar zurj, 390px delgetsend ~2.5 dahin jijigrej haragdana (tovch, tekst jijig, tomruulj harah heregtei). BUG-20 batlagdlaa. ss: 66-iphone13-viewport.png
17:08  Supermodel: 640px (200% tomruulsantai adil) -> bugd bagtaj baina, gehdee zuun irmegt naaldsan (zai baihgui). Ajiglalt. ss: 67-zoom-200-640px.png
17:08  Antisocial (hailt): 'C++ Primer', 'C# in Depth' nemeed 'C++', 'C#' -> zov oldloo. '#' hailt ehleed buh nom butsaasan met haragdsan ch shalgahad minii garaltyn shuultuuriin aldaa baisan, curl-aar %23, %26, %2B zov ajilladag. Aldaa bish. evidence/31-hailt-tusgai-temdegt.txt
17:09  Supermodel (gar): Hailt -> Tab x3 -> ehnii Ustgah, Space -> batalgaajuulaltgui shuud ustgana. Ustgasny daraa focus BODY ruu unana, daraagiin Tab dahin ehnii Ustgah deer ochno: Tab+Space davtahad nom daraalan ustgagdana. Ajiglalt (ustgah batalgaa baihgui)
17:10  App-g etssiin baidlaar dahin asaav: anhnii 3 nom, 'Niit nom: 4'. Session-ii test ogogdol arilsan
17:10  Saboteur: BUG-15 hureeg todorhoiloh: /old?v=1 -> 500, /OLD, /old.html, /v1 -> 404. Zovhon /old zam 500 ogno, server untrahgui. evidence/34-old-huvilbaruud.txt
17:10  Saboteur: BUG-14 hureeg todorhoiloh: DELETE /0 ba /99999999999999999999 -> 200 (baihgui nom), /-1, /3.5 -> 404 (zam taarahgui). Anhnii 3 nom hevee. Zovhon tsifr id deer 'baigaa eseh' shalgahgui. evidence/35-delete-id-hil.txt
17:11  Saboteur: BUG-16 hureeg todorhoiloh: title/author/year null -> 201 hooson nom (untraagui). author:{toString:1,valueOf:1} -> server UNTARLAA (app.js:14 esc). Zohiolch talbar ch title-tei adil untraana. App-g dahin asaav, anhnii 3 nom. evidence/36-null-talbar-author-obyekt.txt
17:11  Supermodel: Nemeh, Ustgah tovch deer hulgana avchrahad ongo oorchlogdohgui (hover baidal baihgui), zovhon cursor=pointer. Ajiglalt
17:25  Session duussan. Idevhtei shalgalt 16:25-17:12 (17:06-17:12 tsegtslelt hamt), 17:12-17:25 huleesen, shine shalgalt hiigeegui. 25 BUG, 67 ss, 54 evidence

--- Huraangui ---
BUG-01 Zaaval talbar shalgahgui: hooson, dutuu, zovhon zaitai talbartai nom nemegdene (UI ba API '{}', '[]')
BUG-02 Nemeh-g dahin/hurdan darahad ijil nom olon udaa nemegdene (talbar tseverlegdehgui, tovch idevhgui bolohgui)
BUG-03 Ustgahad 'Nom nemegdlee' msg garna
BUG-04 On shalgahgui: 999, 2101, 1999.5, -5, 0, abc, 1e3, 1e4, 0x7E4, 20 oron, [2050], true bugd orno
BUG-05 'Infinity' on -> 'Hamgiin shine on: null'
BUG-06 Davhardal shalgahgui (yag ijil, tom/jijig useg, ard zai)
BUG-07 Urt hyazgaar baihgui: zaigui urt garchig husnegtiig evdene, API 100000 temdegt avna
BUG-08 Server ba UI davhar escape: '&' -> '&amp;', '<b>' -> '&lt;b&gt;', hailtaar oldohgui
BUG-09 Hailt tom/jijig useg yalgana (latin, kirill)
BUG-10 Hailt oldohgui uyed msg baihgui
BUG-11 Hailt garchig+' '+zohiolch-iig zalgaj haina, talbar hoorond huurmag taaralt
BUG-12 'Niit nom' uurgelj +1 (/api/stats), hooson ued '1 · 0'
BUG-13 Buruu JSON / form body -> 200 OK (400 baih yostoi), nom uusehgui
BUG-14 Baihgui id DELETE -> 200 OK (404 baih yostoi)
BUG-15 'Huuchin huvilbar' /old -> 500
BUG-16 POST body null ba toString-gui obyekt title/author -> server untarna (app.js:130, :14)
BUG-17 'Nemex' tovchnii 'x' latin useg
BUG-18 Ustgah tovch nogoon
BUG-19 On myngatyn taslaltai ('1,971'), ooroo haruulsan '2,008'-iig avahgui (NaN)
BUG-20 320px orgond Ustgah taslagdana, viewport meta baihgui (iPhone-d 980px desktop baidlaar jijigrene)
BUG-21 Muu year obyekt-toi nom: /api/stats server-iig untraana, UI jagsaalt bugd alga
BUG-22 Server aldaa/untarsan, 431 uyed UI msg-gui, huurmag hevee haragdana
BUG-23 ~100-110 myangan nomoos hoish /api/stats server-iig untraana (Math.max stack)
BUG-24 Uzegdehgui/udirdah temdegt (RTL, zero-width, \n, \u0000) shuugdehgui -> huurmag ner, haragdsanaar hailtaar oldohgui
BUG-25 Hoyr hailt heteh hurdan ilgeehed udaan hailtyn ur dun suuld zurj, talbar ba husnegt zorno (baga)
Notstoi: BUG-16, 21, 23 (app untarna), BUG-01, 04, 12 (ogogdol, tooluur buruu)
Saad: Chrome extension ene Mac-d holbogdoogui tul Playwright-aar Chrome neesen. Server 7 udaa untarsan (null x2, title obyekt, year obyekt, 130000 ba 110000 nom, author obyekt) tul dahin asaaj, ogogdol aldagdsan
Hugatsaa: 16:25-17:25. Charter-iin 5 aylal + davtan shalgalt + nemelt (ihdeh, offline, a11y)
```

## Саадууд (issues)

- Claude in Chrome extension энэ Mac дээр холбогдоогүй, нөгөө хөтчийн localhost дээр өөр апп нээгдсэн тул суулгасан Google Chrome-ийг Playwright-аар цонхтой нь нээж ажилласан. Тасралтгүй ажиллах driver зөвшөөрөгдөөгүй тул дуудлага бүрд Chrome шинээр нээгдэж нэг алхам хийдэг runner ашигласан.
- Хөтөч ба curl дээрх үйлдэл, 67 скриншотыг Claude Code гүйцэтгэсэн. Алхам бүрийн үр дүнг харж дараагийн алхмаа шийдэх байдлаар явсан.
- Сервер 7 удаа унасан (null body 2 удаа, гарчиг/зохиолч/он-д объект, 110000 ба 130000 ном). Тэр бүрд дахин асааж, санах ой дахь өгөгдөл алдагдсан.
- Тэмдэглэл дэх `app.js:130`, `app.js:116` зэрэг мөр нь сервер унах үед консолд хэвлэгдсэн stack trace-ээс авсан. Согогуудыг кодоос биш, ажиглагдсан зан төлөвөөс олсон.
- 17:08-д `#` хайлт бүх ном буцаасан мэт харагдсан нь гаралт шүүсэн script-ийн алдаа байсан, curl-ээр шалгаад «aldaa bish» гэж тэмдэглэсэн.

## Цагийн задаргаа

Setup 5% (3 мин, апп дахин асаах) · Тест дизайн ба гүйцэтгэл 51% (31 мин) · Согог судлах 22% (13 мин: 16:47-16:53 давтан шалгалт ба уналтын шалтгаан, 17:10-17:11 хүрээ тодорхойлох) · Шалгалтгүй хүлээсэн 22% (13 мин, 17:12-17:25)
