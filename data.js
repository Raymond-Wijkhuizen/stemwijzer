var subjects = 
[
/* example subject with parties and their positions:
{
	title: "subject title",
	statement: "subject statement",
	parties: [
		{name: "party1", position: "pro", explanation: "explains why pro"},
		{name: "party2", position: "ambivalent", explanation: "explains why not pro and not contra"},
		{name: "party3", position: "contra", explanation: "explains why contra"}
	]
}
*/
{
	title: "Bindend referendum",
	statement: "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
	parties: [
		{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
		{name: "SP", position: "pro", explanation: "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."},
		{name: "D66", position: "pro", explanation: "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."},
		{name: "GroenLinks", position: "pro", explanation: "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."},
		{name: "Partij voor de Dieren", position: "pro", explanation: "De Partij voor de DierenD wil een correctief bindend referendum invoeren bij verstrekkende besluiten. Bijvoorbeeld bij het overdragen van bevoegdheden of macht aan internationale instellingen zoals de Europese Unie. Of wanneer de overheid vrijhandelsverdragen (zoals TTIP en CETA) wil sluiten die bedreiging vormen voor mens, dier, milieu en democratie."},
		{name: "50Plus", position: "pro", explanation: "50PLUS is voorstander van bindende regionale en landelijke referenda, onder duidelijk wettelijke voorwaarden. Deze vorm van directe democratie vormt een goede aanvulling op de parlementaire democratie, en verkleint de afstand tussen burger en politiek. Hierin volgt 50PLUS het voorbeeld van de Zwitserse referenda."},
		{name: "VNL", position: "pro", explanation: "Burgers moeten meer inspraak krijgen bij politieke besluitvorming. Wij zijn voor een bindend referendum zodat de regering de uitslag niet naast zich neer kan leggen, zoals gebeurde bij het referendum over de Europese Grondwet in 2005 en het OekraÃƒÂ¯ne-referendum van vorig jaar."},
		{name: "Nieuwe Wegen", position: "pro", explanation: "We willen meer betrokkenheid van burgers. De deskundigheid zit in de samenleving. Die moet je gebruiken: hierdoor krijg je betere besluiten, meer draagvlak en verklein je de kloof tussen burger en politiek. Het wordt tijd dat politici en politieke partijen beter gaan luisteren naar de kiezer."},
		{name: "Forum voor Democratie", position: "pro", explanation: "Dit is de enige manier om politici te dwingen om naar de bevolking te luisteren. Niet-bindende referenda worden niet serieus genomen, zie referenda over EU Grondwet en Associatieverdrag OekraÃƒÂ¯ne."},
		{name: "De Burger Beweging", position: "pro", explanation: "Eens, dit geldt met name voor wetten die de overheid zelf in wil voeren. Eventueel ook voor initiatieven van de burgers. De wil wat de burgers via een referendum kenbaar hebben gemaakt worden nu standaard genegeerd. Ook moet de wet veranderd worden dat bij aangaan van internationale verdragen een bindend referendum gehouden moet worden. En dat voor alle wetten en initiatieven hiervoor een referendum mag worden gehouden. Nu kan wettelijk bijna nergens een referendum over worden gehouden."},
		{name: "Vrijzinnige Partij", position: "pro", explanation: "De Vrijzinnige Partij vindt dat een bindend referendum vooraf gehouden moet worden, dus eerst een referendum en dan aanpassing van de wetgeving conform de uitslag door het parlement. Als de nadruk van de stelling op bindend ipv raadplegend ligt, ook eens. Raadplegend is een fopspeen."},
		{name: "Piratenpartij", position: "pro", explanation: "Een bindend referendum is als een noodrem. Die is op dit moment nodig opdat burgers de overheid terug kunnen roepen. De Piratenpartij wil burgers veel meer vooraf betrekken bij het opstellen van wetten, zodat het bindend referendum achteraf minder vaak nodig zal zijn. Zie https://piratenpartij.nl/geennoodrem/"},
		{name: "Libertarische Partij", position: "pro", explanation: "Volksvertegenwoordigers dienen het belang van het volk. Niet andersom. Wij willen bindend referenda als controlemechanisme tegen partij- en lobbybelangen binnen de overheid."},
		{name: "Lokaal in de Kamer", position: "pro", explanation: "Burgers moeten de mogelijkheid hebben om zich tussentijds uit te spreken over grote of belangrijke onderwerpen. De opkomstdrempel van 30% is een goede grens."},
		{name: "VVD", position: "contra", explanation: "De VVD is voorstander van de vertegenwoordigende democratie, de invloed van de bevolking komt tot uiting door middel van de volksvertegenwoordiging, zoals bijvoorbeeld de Tweede Kamer."},
		{name: "PvdA", position: "contra", explanation: "Wij willen dat mensen zelf de toekomst van ons land kunnen bepalen. De PvdA is daarom voorstander van directe democratie. Daarom hebben we een raadgevend referendum en willen we experimenteren met andere vormen van directe democratie zoals G1000 en buurtrechten."},
		{name: "CDA", position: "contra", explanation: "Een referendum is geen geschikt instrument om de democratie te versterken. Een gekozen politicus moet altijd verantwoording afleggen over zijn stem, een kiezer in een referendum niet. Kiezers hoeven hun tegenstem in een referendum ook niet van een uitvoerbaar alternatief te voorzien, politieke partijen in de Kamer wel."},
		{name: "ChristenUnie", position: "contra", explanation: "De ChristenUnie is tegen een referendum, de bevolking kiest al rechtstreeks haar vertegenwoordigers. Dat is de Ã¢â‚¬Ëœrepresentatieve democratieÃ¢â‚¬â„¢ waar de ChristenUnie voor staat. Wel komt er, om onze vrijheidsrechten uit de grondwet te beschermen een Constitutioneel Hof dat wetten toetst aan de Grondwet."},
		{name: "SGP", position: "contra", explanation: "Het is belangrijk dat politici goed contact onderhouden met de samenleving. Referenda passen echter niet in een stelsel van gekozen volksvertegenwoordigers. Bovendien scheppen ze meer verwarring dan helderheid. Daarom kan de referendumwet in de prullenbak."},
		{name: "OndernemersPartij", position: "contra", explanation: "Nederland heeft reeds een zeer directe democratie."},
		{name: "DENK", position: "contra", explanation: "DENK is tegen bindende referenda. Moeilijke maatschappelijke kwesties zijn niet te vatten in een simpel 'ja' of 'nee'. DENK is voor een representatieve democratie waarin gekozen volksvertegenwoordigers de overwegingen en gevoelens van hun achterban actief laten meewegen in hun stemgedrag. Daarom wil DENK maatregelen nemen om onze representatieve democratie te versterken."},
		{name: "Artikel 1", position: "contra", explanation: "De Tweede Kamer is de volksvertegenwoordiging die vraagstukken in al hun complexiteit kan beoordelen. Referenda zijn daar zelden geschikt voor. Bij grote nieuwe politieke beslissingen met heldere Ja/Nee opties kunnen referenda wel nuttig zijn."}
	]
},
{
	title: "Maatschappelijke dienstplicht",
	statement: "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",	
	parties: [
	{name: "PvdA", position: "pro", explanation: "Juist als je jong bent is het van groot belang de samenleving te leren kennen en je er voor in te zetten. Maatschappelijke dienstplicht is een goede manier om jongeren kennis te laten maken met andere kanten van de samenleving. Dat vergroot het begrip en is goed voor de onderlinge verbinding."},
	{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
	{name: "CDA", position: "pro", explanation: "Het CDA wil de maatschappelijke dienstplicht invoeren, om jongeren te betrekken bij de samenleving. Dat kan bij Defensie, maar ook in de zorg, bij de politie of andere maatschappelijke organisaties. Op termijn gaat de maatschappelijke dienstplicht gelden voor alle jongeren, jongens en meisjes. De nieuwe maatschappelijke dienstplicht leert jongeren dat samenleven een gezamenlijke opdracht is en versterkt verbinding, normbesef en burgerschap."},
	{name: "ChristenUnie", position: "pro", explanation: "De ChristenUnie is voor de invoering van een maatschappelijk dienstplicht voor iedereen die 18 wordt. De dienstplicht kan flexibel worden ingevuld, parttime of fulltime in alle sectoren. Het ontwikkelen van sociale competenties, actief burgerschap en het investeren in de samenleving staan centraal."},
	{name: "SGP", position: "pro", explanation: "Een dienstplicht voor iedereen heeft belangrijke voordelen. De komende kabinetsperiode moet verkend worden wat voor- en nadelen zijn en of dit realiseerbaar is. Het gaat om een serieuze en inhoudsvolle invulling, waarbij bureaucratie voorkomen wordt. Kernwoorden moeten zijn discipline, weerbaarheid, integratie en maatschappelijk dienstbetoon. Na een basistraining voor iedereen zou gekozen kunnen worden voor een militair vervolg of een sociale invulling in bijvoorbeeld de zorg."},
	{name: "VNL", position: "pro", explanation: "Wij zijn voorstander van een maatschappelijke dienstplicht voor jongeren omdat dit de integratie bevordert. Jongeren in dienst zullen nooit op uitzending worden gestuurd maar enkel in Nederland taken verrichten."},
	{name: "Nieuwe Wegen", position: "pro", explanation: "Het is goed dat iedereen op jonge leeftijd meedoet en verantwoordelijkheid krijgt voor zaken die voor ons allemaal van belang zijn. Meedoen en meehelpen, in de zorg, in de veiligheid geeft jongeren geeft de kans om werkervaring op te doen. Kortom, goed voor iedereen."},
	{name: "50Plus", position: "ambivalent", explanation: "50PLUS wil maatschappelijke betrokkenheid van jongeren absoluut stimuleren. We denken daarbij vooral aan de maatschappelijke stage. Een maatschappelijke dienstplicht, met de nadruk op plicht, vinden we een minder goed voorstel. Zeker ook vanwege de zware verantwoordelijkheden die werken bij de politie, het leger en in de zorg met zich meebrengen."},
 	{name: "VVD", position: "contra", explanation: "Wij juichen het toe wanneer jongeren naast of tijdens hun opleiding vrijwilligerswerk willen doen in de samenleving. Wij zijn er niet voor om dit van bovenaf af te dwingen."},
	{name: "SP", position: "contra", explanation: "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"},
	{name: "D66", position: "contra", explanation: "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zÃƒÂ©lf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."},
	{name: "GroenLinks", position: "contra", explanation: "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen. Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."},
	{name: "Partij voor de Dieren", position: "contra", explanation: "De Partij voor de Dieren vindt het belangrijk dat jongeren zonder baan kunnen werken aan betere kansen op de arbeidsmarkt in werkgelegenheidsprojecten, bijvoorbeeld in de zorg of in de biologische landbouw. ZoÃ¢â‚¬â„¢n stage zou nooit een verplichtend karakter mogen hebben, maar altijd op vrijwillige basis moeten gebeuren."},
 	{name: "OndernemersPartij", position: "contra", explanation: "Jongeren dienen om allerlei redenen snel in het arbeidsproces te worden betrokken."},
	{name: "DENK", position: "contra", explanation: "DENK is een voorstander van een verplichte maatschappelijke stage, maar is geen voorstander van een maatschappelijke dienstplicht bij het leger of de politie. DENK vindt het van groot belang dat wij onze jongeren leren om maatschappelijk betrokken te zijn. Dit willen wij doen door jongeren een sociale stage te laten lopen die niet per definitie bij de politie of het leger moet."},
	{name: "Forum voor Democratie", position: "contra", explanation: "FVD is tegen de dienstplicht, maar we willen wel een forse uitbreiding van de Nationale Reserve."},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, dit zorgt voor verdringing van reguliere banen en is tegen artikel 23 van de Universele Verklaring van de Rechten van de Mens, gelijke beloning voor gelijk werk."},
	{name: "Vrijzinnige Partij", position: "contra", explanation: "Mensen zijn vrij. Mensen moeten dan ook niet gedwongen worden werk te doen. Dienstplicht wijzen we daarom af. Het is ook absoluut niet vrijzinnig om mensen werk als dienstplichtige te laten doen naast mensen voor het hun werk is. Verdringing wijst de Vrijzinnige Partij af. Bovendien is het een miskenning van dat werk. De VP is wel voor korte maatschappelijke stages, om jongeren kennis te laten maken met voor hen nieuwe werkgebieden."},
	{name: "Piratenpartij", position: "contra", explanation: "De Piratenpartij staat voor vrijheid en is tegen dwang en drang. Een dienstplicht gaat per definitie onder dwang. De Piratenpartij vindt dat het aan eenieder zelf moet zijn om vrijwilligerswerk op te pakken. Een maatschappelijke stage als onderdeel van een onderwijsprogramma is wel een optie, maar dit gebeurt natuurlijk ook al."},
	{name: "Artikel 1", position: "contra", explanation: "Dit zorgt voor verdringing van reguliere banen, en is in strijd met het gelijkwaardigheidsprincipe : Ã¢â‚¬Å“gelijk loon voor gelijk werkÃ¢â‚¬Â, zoals vastgelegd in de Universele Verklaring voor de Rechten van de Mens. Liever zien wij sociaal-maatschappelijk bewustzijn als structureel onderdeel van het onderwijs."},
	{name: "Libertarische Partij", position: "contra", explanation: "De staat is niet bedoeld om burgers in het evenbeeld van de toevallige politieke meerderheid te vormen. De LP is tegen elke vorm van dwang die jongeren dwingen hun leven te pauzeren. Bovendien is een dienstplicht een verouderd model. Maatschappelijke betrokkenheid is een groot goed, maar dan wel vrijwillig."},
	{name: "Lokaal in de Kamer", position: "contra", explanation: "Normen en waarden bijbrengen door middel van een maatschappelijke dienstplicht is te laat. Lokaal in de Kamer ziet veel meer toekomst in betere ondersteuning van ouders en onderwijs om normen en waarden in kinderen te verankeren."}
	]
},
{
	title: "Anoniem solliciteren",
	statement: "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
	parties: [
	{name: "PvdA", position: "pro", explanation: "Het zou eigenlijk niet nodig moeten zijn dat mensen hun leeftijd, naam of geslacht achterwege houden. Maar zolang deze vorm van discriminatie een feit is moeten we die aanpakken ÃƒÂ©n mensen de kans geven om uitgenodigd te worden voor een sollicitatiegesprek. Anoniem solliciteren biedt dat perspectief."},
	{name: "D66", position: "pro", explanation: "Nederlanders met een niet-westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond. D66 wil dit verschil terugdringen. EÃƒÂ©n van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie- en promotieprocedures."},
	{name: "GroenLinks", position: "pro", explanation: "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties."},
	{name: "Partij voor de Dieren", position: "pro", explanation: "De overheid treedt met kracht op tegen alle uitingsvormen van discriminatie. Anoniem solliciteren kan helpen om discriminatie op grond van afkomst tegen te gaan. Het is mede de taak van de overheid om overal waar sprake is van achterstelling van groepen zorg te dragen voor volwaardige integratie en gelijkberechtiging."},
	{name: "50Plus", position: "pro", explanation: "50PLUS vindt dat alle vormen van discriminatie hoog op de agenda moeten staan. Discriminatie op de arbeidsmarkt - op welke grond dan ook - moet teruggedrongen worden. Anoniem solliciteren kan daarbij helpen; solliciteren zonder vermelding van de leeftijd bijvoorbeeld ÃƒÂ³ÃƒÂ³k."},
	{name: "Lokaal in de Kamer", position: "pro", explanation: "Eens, al moet anoniem solliciteren niet nodig zijn. Discriminatie is strafbaar, en dat is hierbij de basisgedachte."},
	{name: "Vrijzinnige Partij", position: "ambivalent", explanation: "Gelijkwaardigheid van mensen geldt als vrijzinnige uitgangspunt. Discriminatie wordt niet voorkomen door anoniem te solliciteren. Het is dan symbool-politiek. Keurig correct en vervolgens schiet niemand er iets mee op, de werkzoekende nog het minst. Het gaat om het weg nemen van vooroordelen door ervoor te zorgen dat iedereen goede gelijke onderwijskansen heeft en dus goed opgeleid is om kansen op de arbeidsmarkt te kunnen krijgen."},
	{name: "VVD", position: "contra", explanation: "Een bedrijf moet je aannemen om wie je bent, en wat jouw toegevoegde waarde is. Je zou niet naam of afkomst hoeven te verbergen. Wij zijn dan ook tegen anoniem solliciteren. Bedrijven en organisaties die zich schuldig maken aan discriminatie moeten worden aangepakt."},
	{name: "PVV", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "SP", position: "contra", explanation: "Discriminatie moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."},
	{name: "CDA", position: "contra", explanation: "Anoniem solliciteren is een paardenmiddel en biedt uiteindelijk geen oplossing tegen discriminatie. Dat moet dus geen algemene regel worden."},
	{name: "ChristenUnie", position: "contra", explanation: "De ChristenUnie strijdt tegen discriminatie, ook op de arbeidsmarkt. Nog te vaak spelen zaken als geslacht, kinderwens/zwangerschap, etniciteit of leeftijd een rol bij de sollicitatie. Daarom willen we anoniem solliciteren mogelijk te maken. Verplichten of het opleggen van quota voert te ver."},
 	{name: "SGP", position: "contra", explanation: "De overheid heeft een voorbeeldfunctie als werkgever. Het is dus belangrijk dat de overheid ervoor zorgt dat wettelijke regels om te voorkomen dat er discriminatie plaatsvindt bij sollicitaties goed worden nageleefd. Extra regels moeten echter wel worden getoetst op noodzakelijkheid. Uit pilots blijkt dat anoniem solliciteren niet zozeer helpt en niet leidt tot diversiteit. Dan moet de overheid dergelijke goedbedoelde maatregelen en extra lasten niet opleggen."},
	{name: "OndernemersPartij", position: "contra", explanation: "De problemen met discriminatie op basis van naam gelden niet bij de overheid. Deze maatregel is een opmaat voor verplichting in het bedrijfsleven en daar is de OP absoluut tegen."},
	{name: "VNL", position: "contra", explanation: "Anoniem solliciteren werkt niet. Daarom zijn wij geen voorstander hier een algemene regel van te maken."},
	{name: "DENK", position: "contra", explanation: "DENK staat voor een keiharde bestrijding van discriminatie en racisme, maar DENK wil geen samenleving waarin mensen delen van hun identiteit moeten verbergen om aan een baan te kunnen komen. Dat is immers de last leggen bij slachtoffers, in plaats van bij daders. Daarom is DENK voor maatregelen die discriminerende werkgevers opsporen en bestraffen, in plaats van voor maatregelen die de last bij sollicitanten leggen."},
	{name: "Nieuwe Wegen", position: "contra", explanation: "Discriminatie op de arbeidsmarkt moet overal worden aangepakt en aan de kaak worden gesteld. Dat vraagt om een open blik van iedereen. Individuele werkgevers die zich hier aan schuldig maken moeten worden aangesproken. Vanwege de vergrijzing hebben we iedereen nodig op de arbeidsmarkt. Anoniem solliciteren verdoezelt het probleem."},
	{name: "Forum voor Democratie", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, hiermee wordt probleem alleen maar mee verschoven en het probleem niet bij de bron aangepakt."},
	{name: "Piratenpartij", position: "contra", explanation: "De Piratenpartij wil dat zoveel mogelijk van onderop geregeld kan worden: subsidiariteit. Lokale overheden mogen dit van de Piratenpartij dus zelf beslissen. We vinden niet dat de landelijke politiek andere overheden hierin normen moet opleggen."},
	{name: "Artikel 1", position: "contra", explanation: "Anoniem solliciteren legt de verantwoordelijkheid om arbeidsdiscriminatie tegen te gaan bij de sollicitant. Artikel 1 pleit voor voorlichting onder werkgevers en diversiteitsquota. Wij vinden het onacceptabel om mensen te vragen een deel van hun identiteit te verhullen om geaccepteerd te worden."},
	{name: "Libertarische Partij", position: "contra", explanation: "We willen geen discriminatie bij de overheid zien. Artikel 1 van de grondwet verbiedt dit. Keuzes voor aanstellingen bij de overheid dienen op basis van kwaliteiten die onderzocht moeten kunnen worden. Daarbij past anoniem solliciteren niet."}
	] 
},
{
	title: "Groepsbelediging",
	statement: "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.",
	parties: [
	{name: "VVD", position: "pro", explanation: "De VVD gaat uit van het individu, niet de groep. Een groep kan niet beledigd zijn, leden van een groep wel. Individuele belediging is op dit moment strafbaar en moet dat blijven."},
	{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
	{name: "OndernemersPartij", position: "pro", explanation: "Vrijheid van meningsuiting is een groot goed."},
	{name: "VNL", position: "pro", explanation: "Wij zijn een groot voorstander van de vrijheid van meningsuiting. Het debat hoort thuis in de samenleving en het parlement, niet in de rechtszaal. Het mag niet zo zijn dat tekenaars uit hun bed worden gehaald door de politie (zoals gebeurde bij Gregorius Nekschot) of dat politici vanwege hun mening worden veroordeeld (zoals bij Wilders)."},
	{name: "Forum voor Democratie", position: "pro", explanation: "FVD maakt zich bij uitstek hard voor de Vrijheid van Meningsuiting. We zijn zelfs een petitie gestart naar aanleiding van de veroordeling van Geert Wilders, waarbij we pleiten voor de afschaffing van artikelen 137c en 137d uit het Wetboek van Strafrecht. Voor ons staat vrijheid van meningsuiting op de allereerste plek."},
	{name: "Libertarische Partij", position: "pro", explanation: "Vrijheid van meningsuiting is een groot goed. Zolang er niet wordt opgeroepen tot geweld, vinden wij dat burgers in het publieke debat moeten kunnen zeggen wat ze willen. Daar staat tegenover dat impopulaire meningen hand en tand bestreden kunnen worden. Dit is de essentie van een vrije samenleving."},

	{name: "Piratenpartij", position: "ambivalent", explanation: "De Piratenpartij is tegen het strafbaarstellen van beledigingen. Discriminatie (een beoordeling op basis van ras, godsdienst of geaardheid) moet echter wÃ©l strafbaar blijven. De Piratenpartij wil niet tornen aan het recht op gelijke behandeling."},
	{name: "PvdA", position: "contra", explanation: "Vrijheid van meningsuiting is een recht. Beledigen op grond van ras, godsdienst of geaardheid is dat niet. Net als het aanzetten tot haat jegens elkander."},
	{name: "SP", position: "contra", explanation: "De strafbaarheid op belediging van groepen blijkt in de praktijk een nuttig middel om bijvoorbeeld antisemitisme of religieuze haatoproepen tegen homoseksuelen tegen te gaan."},
	{name: "CDA", position: "contra", explanation: "De overheid moet slachtoffers beschermen en daders aanpakken. Belediging afschaffen als strafbaar feit betekent dat de overheid zijn handen aftrekt van deze rol. Hier gaat een totaal verkeerd signaal van uit. Belediging is een groot probleem. Het mag niet normaal zijn om te schelden en elkaar te beledigen en de overheid dient dit, als het te ver gaat, te bestraffen."},
	{name: "D66", position: "contra", explanation: "D66 is voor vrije meningsuiting maar vindt dat het opzettelijk beledigen, discrimineren en haat zaaien tegen mensen vanwege het behoren tot een bepaalde bevolkingsgroep, niet past in onze samenleving."},
	{name: "ChristenUnie", position: "contra", explanation: "De vrijheid van meningsuiting is niet onbegrensd. De ChristenUnie wil dat haatzaaien en opzettelijke belediging strafbaar blijven, omdat ze de vrijheid en de rechten van anderen, en daarmee de vrede in de samenleving, aantasten."},
	{name: "GroenLinks", position: "contra", explanation: "Onze samenleving is de afgelopen vijftien jaar verruwd. Respectloos gedrag lijkt normaal te zijn geworden. GroenLinks stelt een harde grens: we pakken racisme en discriminatie keihard aan, zeker als het gekoppeld wordt aan geweld of het oproepen tot geweld, intimidatie en bedreigingen."},
	{name: "SGP", position: "contra", explanation: "De vrijheid van meningsuiting is een groot goed. Dat betekent niet dat het een vrijbrief moet zijn om elkaar te kwetsen. Het is belangrijk dat mensen zelf rekening houden met elkaars gedachten en gevoelens. De SGP is niet voor een samenleving waarin antisemitische uitspraken worden toegejuicht. Waarin ontkenning van de holocaust een recht is. Waarin Isis kan worden verheerlijkt. Daarom moet het mogelijk zijn om belediging van groepen te vervolgen. Dat vraagt om wettelijke normen."},
	{name: "Partij voor de Dieren", position: "contra", explanation: "De Partij voor de Dieren vindt dat de overheid met kracht moet optreden tegen alle uitingsvormen van discriminatie. Het is mede de taak van de overheid om overal waar sprake is van achterstelling van groepen - zoals mensen met een beperking, vrouwen, etnische minderheden en LHBTI- zorg te dragen voor volwaardige integratie en gelijkberechtiging."},
	{name: "50Plus", position: "contra", explanation: "50PLUS vind dat belediging strafbaar moet blijven, zeker ook als het om smaad en laster gaat. Beledigen op grond van ras, godsdienst, leeftijd of geaardheid is niet de samenleving die 50PLUS voorstaat."},
	{name: "DENK", position: "contra", explanation: "Onze samenleving verhardt, verrechtst en verruwt. In een tijd dat de verhoudingen steeds meer op scherp staan en mensen steeds harder over elkaar spreken, moeten we groepsbelediging niet uit het Wetboek van strafrecht halen."},
	{name: "Nieuwe Wegen", position: "contra", explanation: "In deze tijd van hufterigheid, uitsluiting en respectloos gedrag moeten we elkaar niet nog meer gaan beledigen. Tijd voor respect en fatsoen. Het niet langer strafbaar stellen van belediging zou in deze tijd het verkeerde signaal zijn."},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, ook politici die zich hier schuldig aan maken moeten gelijk net als ieder ander naar redelijkheid voor bestraft worden."},
	{name: "Vrijzinnige Partij", position: "contra", explanation: "Belediging is per definitie het afwijzen van gelijkwaardigheid van mensen. Dat zal aangepakt moeten blijven worden. Het heeft niets met vrijheid van meningsuiting te maken. Of een uitspraak wel of niet in een bepaalde context is te zien als belediging is aan de rechter."},
	{name: "Artikel 1", position: "contra", explanation: "Groepsbelediging is een serieuze aantasting van de gelijkwaardigheid en eenheid van de maatschappij. Zeker ook waar dit ras, religie of geaardheid betreft."},
	{name: "Lokaal in de Kamer", position: "contra", explanation: "Mensen moeten zichzelf kunnen zijn, zonder daarbij gediscrimineerd te worden op basis van ras, godsdienst of geaardheid."}
	]
},
{
	title: "Teelt en verkoop wiet",
	statement: "De teelt en verkoop van wiet moet legaal worden.",
	parties: [
	{name: "PvdA", position: "pro", explanation: "Het legaliseren van Wiet levert alleen maar voordelen op: de politie kan zich richten op de echte misdaad, de wiet wordt minder schadelijk en de samenleving ontvangt extra inkomsten - niet de misdadigers - waar we goede dingen mee kunnen doen."},
	{name: "SP", position: "pro", explanation: "Het legaliseren van teelt en verkoop van wiet heeft verschillende voordelen. We kunnen de teelt controleren en reguleren en beter voorlichten, wat de volksgezondheid kan helpen. Bovendien zou legalisering een zware slag toebrengen aan de georganiseerde misdaad, die nu een belangrijke inkomstenbron heeft uit de wietteelt. "},
	{name: "D66", position: "pro", explanation: "Omdat wietteelt illegaal is, domineren criminele organisaties nu de gehele wiethandel. Met legaliseren van wiet wordt de productie gecontroleerd. Dit levert veel geld op en de criminaliteit wordt teruggedrongen. Ook kunnen, net als bij alcohol en tabak, strenge eisen aan de productie gesteld worden."},
	{name: "GroenLinks", position: "pro", explanation: "De huidige drugsbestrijding kost veel geld, tijd en menskracht, die ook zou kunnen gaan naar politie-inzet tegen straatroof, inbraken en huiselijk geweld. GroenLinks wil softdrugs legaliseren. De drugcriminaliteit zal hierdoor afnemen, terwijl de kwaliteit van softdrugs controleerbaar wordt."},
	{name: "Partij voor de Dieren", position: "pro", explanation: "Het gebruik en de productie van softdrugs wordt gelegaliseerd, zodat teelt legaal wordt en er accijns over kan worden geheven. De overheid draagt zorg voor een goede voorlichting over de gezondheidsrisicoâ€™s van het gebruik van softdrugs."},
	{name: "50Plus", position: "pro", explanation: "Niet legaliseren van wietteelt betekent: gÃ©Ã©n grip en controle over deze â€˜sectorâ€™. Totaal verbieden van gebruik Ã©n teelt zou de hele 'sector' in de illegaliteit doen verdwijnen met alle gevolgen van dien. Het is bizar dat wiet nu illegaal via de achterdeur binnen komt, en legaal verkocht mag worden via de voordeur. De teelt werkt ook criminaliteit en overlast in de hand. Tegelijkertijd steunt 50PLUS een actief ontmoedigingsbeleid voor het gebruik. Medicinale wiet wordt vergoed."},
	{name: "OndernemersPartij", position: "pro", explanation: "Middels een vergunningstelsel en een legaal fiscale afdracht van inkomsten."},
	{name: "VNL", position: "pro", explanation: "De politie moet zich bezighouden met de bestrijding van echte criminaliteit. Wiet is niet schadelijker dan alcohol en tabak. Harddrugs (bijvoorbeeld heroÃ¯ne) pakken we keihard aan. "},
	{name: "DENK", position: "pro", explanation: "Het gedoogbeleid leidt tot overlast, risico's op het gebied van veiligheid, risico's op het gebied van gezondheid en tot criminaliteit. Daarom wil DENK overgaan tot regulering, zodat risico's worden uitgebannen en criminaliteit wordt bestreden. "},
	{name: "Nieuwe Wegen", position: "pro", explanation: "Het huidige beleid rond coffeeshops is er een van pappen en nathouden. We moeten elkaar niet langer voor de gek houden. De teelt en verkoop moeten door de overheid gereguleerd worden. De onderwereld heeft nu teveel macht. Met het reguleren van de teelt verdwijnt hun verdienmodel en hebben we meer grip op de criminaliteit. Door het te reguleren is ook de kwaliteit van de wiet gewaarborgd en voorkomen we dat er troep ingenomen wordt door onze jongeren."},
	{name: "Forum voor Democratie", position: "pro", explanation: "Forum voor Democratie is voor modernisering van het soft-en harddrugsbeleid. Het huidige beleid bereikt het tegengestelde van wat wordt beoogd. Het leidt tot onbedoelde en ongewenste consequenties en staat een effectieve aanpak van gezondheidsproblematiek, criminaliteit en overlast in de weg. Op dit moment is de aanvoer van softdrugs verboden, maar de verkoop legaal. Deze schizofrene situatie werkt de georganiseerde misdaad in de hand en belemmert effectieve controle op kwaliteit van cannabis. "},
	{name: "De Burger Beweging", position: "pro", explanation: "Eens, zie voorbeeld Portugal."},
	{name: "Vrijzinnige Partij", position: "pro", explanation: "Het is zeer onzinnig om verkoop nu te gedogen en tevens teelt en levering te verbieden. Beter is het om goede randvoorwaarden te gaan bepalen voor teelt en levering. Dan kunnen misstanden en slechte kwaliteit voorkomen en dan aangepakt worden. Ook is de Vrijzinnige Partij voor verruiming van de mogelijkheden van wiet voor medicinaal gebruik."},
	{name: "Piratenpartij", position: "pro", explanation: "De Piratenpartij is een uitgesproken voorstander van de legalisering van cannabis. Zo wordt 77% van de opsporingscapaciteit vrijgespeeld, die de politie kan steken in opsporing van misdaad. Bovendien kan door kwaliteitscontrole de volksgezondheid verbeterd worden. Daarnaast zorgt dit voor een flinke groei van de legale economie."},
	{name: "Artikel 1", position: "pro", explanation: "Door teelt en verkoop te legaliseren en reguleren wordt criminaliteit teruggedreven, kwaliteit verbeterd, en profiteert de staatskas, dus de gemeenschap. Verder zetten we in op goede voorlichting bij de jeugd en beginnende gebruikers."},
	{name: "Libertarische Partij", position: "pro", explanation: "Het verbod op teelt en verkoop van wiet heeft een omvangrijke criminele onderwereld tot stand gebracht. Mensen die in deze wetteloze wereld terechtkomen schuwen geen geweld en trekken sowieso niets aan van wetgeving. Jongeren die met deze gewetenloze criminelen in aanraking komen, worden bovendien blootgesteld aan nog veel gevaarlijker en verslavende drugs. Legalisatie is de methode om deze misstanden te bestrijden. Bovendien spaart de samenleving miljarden op handhaving en andere kosten."},
	{name: "Lokaal in de Kamer", position: "ambivalent", explanation: "Lokaal in de Kamer is tegen legalisering van wietteelt en verkoop, maar steunt de initiatieven voor medicinale wiet."},
	{name: "VVD", position: "contra", explanation: "Legalisering is wat de VVD betreft onverstandig, wel wil de VVD het beleid rond softdrugs slimmer reguleren. "},
	{name: "PVV", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "CDA", position: "contra", explanation: "Nederland produceert grote hoeveelheden softdrugs, die voor het overgrote deel bestemd zijn voor woekerwinsten uit het buitenland. Softdrugs gebruiken is niet normaal; het is troep en lang niet zo onschuldig als sommigen beweren. Softdrugs zijn schadelijk voor de gezondheid en veroorzaken veel sociale overlast. Het CDA wil de illegale handel in drugs aanpakken in plaats van gedogen."},
	{name: "ChristenUnie", position: "contra", explanation: "Drugsgebruik is niet onschuldig. De ChristenUnie wil het gedoogbeleid volledig afschaffen, drugscriminaliteit bestrijden en meer aandacht voor verslavingszorg en begeleiding van gezinnen bij drugsproblematiek."},
	{name: "SGP", position: "contra", explanation: "De SGP vindt het gedoogbeleid onduidelijk en halfslachtig. De indruk wordt gewekt dat zoâ€™n beetje alles kan of door de vingers wordt gezien. Het gedoogbeleid moet daarom per direct worden afgeschaft. In plaats van gedogen wil de SGP de wet handhaven. De productie van drugs blijft dan ook strafbaar als het aan de SGP ligt. Aan gereguleerde wietteelt van de overheid moeten we niet beginnen."}
	]
},
{
	title: "Vervroegde vrijlating",
	statement: "De vervroegde vrijlating onder voorwaarden van gevangenen moet stoppen. Zij moeten hun straf helemaal uitzitten.",
	parties: [
	{name: "VVD", position: "pro", explanation: "Iemand die een gevangenisstraf krijgt moet deze voor de volledige duur uitzitten. Het automatisme dat iemand na tweederde van de straf in aanmerking komt voor vervroegde vrijlating, wil de VVD afschaffen. "},
	{name: "PvdA", position: "pro", explanation: "Het is onrechtvaardig dat mensen hun straf ontlopen. Het principe moet zijn dat alle criminelen hun straf uitzitten."},
	{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
	{name: "CDA", position: "pro", explanation: "Straf is straf, vindt het CDA. Dat is nu niet het geval. Een veroordeelde kan nu voorwaardelijk vrij komen als hij 2/3e van zijn straf heeft uitgezeten. Voor iemand die tot 20 jaar cel is veroordeeld, betekent dit dat hij al na 13 jaar weer vrij kan komen. Dat doet geen recht aan de belangen en positie van het slachtoffer en tast het vertrouwen in de samenleving aan."},
	{name: "ChristenUnie", position: "pro", explanation: "De ChristenUnie wil dat een opgelegde straf wordt uitgezeten. De voorwaardelijke invrijheidstelling na het uitzitten van 2/3 van de straf mag dan ook geen recht of automatisme zijn."},
	{name: "SGP", position: "pro", explanation: "De SGP is van mening dat een voorwaardelijk deel van de straf alleen en uitdrukkelijk door de rechter moet kunnen worden opgelegd. Veroordeelden moeten niet automatisch in aanmerking kunnen komen voor een strafkorting. De straf die door de rechter wordt opgelegd moet ook daadwerkelijk worden uitgezeten. De SGP heeft daarom een wetsvoorstel geschreven om de vervroegde vrijlating af te schaffen. "},
	{name: "50Plus", position: "pro", explanation: "De hele straf uitzitten vindt 50PLUS niet meer dan logisch. Het is strijdig met het rechtsgevoel van veel mensen als veroordeelden na twee derde van hun straf bijna standaard vervroegd vrij kunnen komen. Dat kÃ¡n niet de bedoeling zijn van het rechtssysteem. En, iemand met bijvoorbeeld een belastingschuld, moet deze ook in z'n geheel aflossen en niet maar voor twee derde."},
	{name: "OndernemersPartij", position: "pro", explanation: "Straf moet straf zijn. "},
	{name: "VNL", position: "pro", explanation: "Criminelen moeten hun volledige straf uitzitten. Dan had bijvoorbeeld de moordenaar van Pim Fortuyn, Volkert van der Graaf, niet 12 jaar maar 18 jaar in de gevangenis gezeten. "},
	{name: "Nieuwe Wegen", position: "pro", explanation: "Een straf is een straf. In Nederland worden gevangenen al na 2/3 van hun straf vrijgelaten. Dat kan niet langer. Gewoon je straf uitzitten. Doen we dat niet, dan bevordert dat het gevoel van rechtsongelijkheid, gevangenen komen zo te makkelijk weg met hun straf. In de tijd van hun gevangenschap moet er wel hard gewerkt worden aan een normale terugkeer in de samenleving. "},
	{name: "Forum voor Democratie", position: "pro", explanation: "Geen toelichting gegeven"},
	{name: "Lokaal in de Kamer", position: "pro", explanation: "De opgelegde strafmaat is door rechters met rede en onderbouwing opgelegd. Daarbij vindt Lokaal in de Kamer betere en intensievere begeleiding bij terugkeer in de maatschappij belangrijk. "},
	{name: "SP", position: "contra", explanation: "Criminelen moet je niet alleen straffen, maar ook resocialiseren, zodat ze niet later opnieuw de fout in gaan. Door tijdens de gevangenschap in te zetten op werk, scholing en goed gedrag kan hieraan gewerkt worden. De mogelijkheid tot vervroegde vrijlating is hierbij een goede motivator."},
	{name: "D66", position: "contra", explanation: "D66 vindt het belangrijk dat de kans op herhaling van misdaden zo klein mogelijk wordt gemaakt door gevangenen in de laatste fase van hun straf onder strenge voorwaarden en toezicht te laten terugkeren in de samenleving. "},
	{name: "GroenLinks", position: "contra", explanation: "Voorwaardelijke vrijlating betekent dat gevangenen bij goed gedrag na het uitzitten van twee derde van hun straf worden vrijgelaten onder strikte regels. Als ze die overtreden, moeten ze terug naar de cel. Dit stimuleert hen om een toekomst vrij van criminaliteit op te bouwen."},
	{name: "Partij voor de Dieren", position: "contra", explanation: "Straffen dienen streng maar rechtvaardig te zijn en uitzicht te bieden op rehabilitatie, met maatregelen die de kans verkleinen op recidive. Rechters houden bij het bepalen van de strafmaat al rekening met vervroegde vrijlating. Als dit wordt gestopt, zullen ze daar in het bepalen van de straf rekening mee houden en zal de straf lager uitvallen."},
	{name: "DENK", position: "contra", explanation: "DENK staat voor effectief strafrecht dat in balans is tussen preventie en repressie. DENK voelt niets voor louter keiharde benaderingen en spierballentaal. Vervoegde vrijlating kan een goed instrument zijn om te zorgen voor snellere re-integratie van daders in de samenleving. Dit laat onverlet dat er genoegdoening moet zijn voor het leed van slachtoffers en dat criminelen gewoon bestraft moeten worden. "},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, er kunnen goede redenen zijn om mensen eerder vrij te laten en we hebben ons te houden aan normen hiervoor van internationaal recht."},
	{name: "Vrijzinnige Partij", position: "contra", explanation: "Ieder mens heeft recht op perspectief op vrijheid. Vervroegde vrijlating moet geen automatisme zijn, maar een stimulans voor gevangen, ook levenslang gestraften, zijn om vrij te kunnen komen als er geen gevaar voor herhaling is."},
	{name: "Piratenpartij", position: "contra", explanation: "In de praktijk houden rechters al rekening met de periode van vervroegde vrijlating. De Piratenpartij wil de reclassering in deze periode inzetten om te zorgen dat veroordeelde criminelen hun leven weer op de rails krijgen, om zo de kans op nieuwe misdaden (recidive) zo laag mogelijk te houden."},
	{name: "Artikel 1", position: "contra", explanation: "Artikel 1 streeft een humaan beleid voor, waarbij het doel in eerste instantie terugkeer in de maatschappij is. Met inachtneming van de genoegdoening voor slachtoffers en de kans op recidiveren, heeft een veroordeelde recht op goede reclassering en de mogelijkheid een nieuwe start te maken."},
	{name: "Libertarische Partij", position: "contra", explanation: "Gevangenen met uitzicht op vervroegde vrijlating hebben iets om naartoe te werken. Wij pleiten voor een \"per geval\" benadering. Gevangenen die geweld plegen in detentie mogen niet in aanmerking komen voor vervroegde vrijlating. Rechters moeten ook de mogelijkheid hebben om per geval vervroegde vrijlating bij het opleggen van een straf te verbieden. "}
	]
},
{
	title: "Vennootschapsbelasting",
	statement: "De belasting over de winst van ondernemingen (vennootschapsbelasting) moet omlaag.",
	parties: [
	{name: "VVD", position: "pro", explanation: "Om bedrijven in Nederland te houden en meer bedrijven hier te krijgen, willen wij de vennootschapsbelasting verlagen. Zo kunnen bedrijven de concurrentie met omringende landen aan en blijven banen in Nederland."},
	{name: "CDA", position: "pro", explanation: "Ondernemers betalen momenteel veel belasting over hun winst. Ondernemen moet weer lonend worden en Nederlandse ondernemers moeten kunnen concurreren tegen producten en diensten uit het buitenland. Het hoge tarief van de vennootschapsbelasting zou pas bij een hogere winst moeten gelden, zodat MKB-ondernemers minder winstbelasting verschuldigd zijn."},
	{name: "SGP", position: "pro", explanation: "Om de werkgelegenheid en de economische groei te stimuleren moeten de lasten voor ondernemers omlaag. In het financieel plaatje van de SGP wordt het tarief daarom verlaagd. "},
	{name: "OndernemersPartij", position: "pro", explanation: "Dit stimuleert het ondernemen."},
	{name: "VNL", position: "pro", explanation: "Lage belasting voor bedrijven betekent meer economische groei. Dit zorgt voor meer banen, meer koopkracht en dus meer welvaart voor iedereen."},
	{name: "Forum voor Democratie", position: "pro", explanation: "Vooral voor het MKB en ZZP-ers moet de belasting omlaag, zij betalen in de praktijk vaak meer belasting dan de multinationals."},
	{name: "Libertarische Partij", position: "pro", explanation: "Vanzelfsprekend moeten alle belastingen omlaag, dus ook de vennootschapsbelasting. Meer geld in het laatje van ondernemers betekent meer investeringsmogelijkheden en meer banengroei."},
	{name: "Lokaal in de Kamer", position: "pro", explanation: "Ondernemers betalen naar verhouding veel belasting, terwijl zij voor werkgelegenheid zorgen. Lagere belastingen kunnen leiden tot meer investeringen en dus meer banen. "},
	{name: "PvdA", position: "contra", explanation: "Bedrijven moeten net als alle anderen gewoon netjes hun belasting betalen. Op dit moment betalen werknemers het leeuwendeel van de belasting en bedrijven een relatief laag tarief. Verlaging is dus onnodig."},
	{name: "PVV", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "SP", position: "contra", explanation: "Bedrijven, zeker de grote multinationals, betalen in Nederland al weinig belasting in vergelijking tot andere landen. Door de belastingen voor de multinationals juist te verhogen en belastingontwijking tegen te gaan, kunnen de lasten voor gewone werknemers weer omlaag."},
	{name: "D66", position: "contra", explanation: "Het is belangrijk dat Nederland aantrekkelijk is voor bedrijven om zich te vestigen. Dit levert banen op en is goed voor de economie. D66 kiest er voor om andere belastingen, zoals de inkomstenbelasting verlagen. Daarvan profiteert iedereen en niet alleen bedrijven."},
	{name: "ChristenUnie", position: "contra", explanation: "De ChristenUnie hervormt het belastingstelsel. Het wordt moeilijker belastingen te ontwijken. Het midden- en kleinbedrijf gaat minder belasting betalen, multinationals meer."},
	{name: "GroenLinks", position: "contra", explanation: "GroenLinks wil welvaart eerlijk delen. We willen dat iedereen zijn deel bijdraagt: grote bedrijven betalen nu veel minder belastingen dan werknemers en kleine ondernemers betalen. Daarom vragen wij meer van multinationals en pakken wij belastingontwijking aan."},
	{name: "Partij voor de Dieren", position: "contra", explanation: "Het tarief kan in principe ongewijzigd blijven. Belangrijker is dat multinationals geen deals meer met de fiscus kunnen sluiten tbv belastingontwijking. Zo kan oneerlijke concurrentie tussen multinationals en het MKB aangepakt worden. De belasting op arbeid moet wel verlaagd worden. De werkgelegenheid wordt zo bevorderd."},
	{name: "50Plus", position: "contra", explanation: "50PLUS vindt niet dat de vennootschapsbelasting per definitie omlaag moet. Het huidige tarief is (nog) behoorlijk concurrerend binnen de EU. "},
	{name: "DENK", position: "contra", explanation: "Multinationals en grote bedrijven moeten wat DENK betreft een grotere bijdrage leveren aan onze samenleving. Op dit moment wordt er door deze ondernemingen te veel belasting ontdoken en ontweken. Daarom vraagt DENK van grote bedrijven wat meer, zodat we de mensen die het nodig hebben kunnen steunen. "},
	{name: "Nieuwe Wegen", position: "contra", explanation: "Grote bedrijven en multinationals zoals Apple en Starbucks moeten meer belasting gaan betalen. Zij maken misbruik van ons belastingsysteem en de kansen die de EU ze geeft. Hoogste tijd dat zij door meer belastingen te betalen bij gaan dragen aan onze zorg, onderwijs en veiligheid. Voor het midden- en kleinbedrijf mogen de belastingen niet omhoog. Zij zijn de spil en banenmotor van onze economie. "},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, belasting op winst van bedrijven is sinds 1990 al gehalveerd en nu veel lager dan belasting op inkomsten uit arbeid."},
	{name: "Vrijzinnige Partij", position: "contra", explanation: "De vennootschapbelasting moet juist omhoog. Door invoering van het basisinkomen zullen de bedrijven lager loonkosten hebben en meer winst. Met onder andere die hogere belasting op de winst kan het basisinkomen betaald worden."},
	{name: "Piratenpartij", position: "contra", explanation: "De Piratenpartij is van mening dat het belastingklimaat gunstiger moet worden voor kleine ondernemers en ZZP'ers. Echter, een algehele verlaging van de vennootschapsbelasting zou ook de multinationals steunen terwijl veel kleine ondernemers er niks van merken omdat ze toch al geen vennootschapsbelasting betalen. Hiervoor zijn betere maatregelen te bedenken zoals bijvoorbeeld een hogere ondernemersaftrek."},
	{name: "Artikel 1", position: "contra", explanation: "Bedrijven betalen nu al relatief weinig belasting in vergelijking met burgers."}
	]
}
];

var parties = [
	{name: "VVD", secular: true, size: 33, long: "Volkspartij voor Vrijheid en Democratie"},
	{name: "CDA", secular: false, size: 19, long: "Christen Democratisch Appel"},
	{name: "PVV", secular: true, size: 20, long: "Partij voor de Vrijheid"},
	{name: "D66", secular: true, size: 19, long: "Democratie 66"},
	{name: "GroenLinks", secular: true, size: 14},
	{name: "SP", secular: true, size: 14, long: "Socialistische Partij"},
	{name: "PvdA", secular: true, size: 9, long: "Partij van de Arbeid"},
	{name: "ChristenUnie", secular: false, size: 5},
	{name: "Partij voor de Dieren", secular: true, size: 33},
	{name: "SGP", secular: false, size: 33, long: "Staatkundig Gerefomeerde Partij"},
	{name: "DENK", secular: true, size: 3},
	{name: "Forum voor Democratie", secular: true, size: 2},
	{name: "Lokaal in de kamer", secular: true, size: 0},
	{name: "OndernemersPartij", secular: true, size: 0},
	{name: "VNL", secular: true, size: 0},
	{name: "Nieuwe Wegen", secular: true, size: 0},
	{name: "De Burger Beweging", secular: true, size: 0},
	{name: "Piratenpartij", secular: true, size: 0},
	{name: "Artikel 1", secular: true, size: 0},
	{name: "Libertarische Partij", secular: true, size: 0}
];

var nr = 0;
var choices = [];


var subject = document.getElementById('subject');
var skip = document.getElementById('next');
var back = document.getElementById('back');
var eens = document.getElementById('eens');
var oneens = document.getElementById('oneens');
var geen = document.getElementById('geen');


// console.dir(subject);

title.innerHTML = subjects[nr].title;
subject.innerHTML = subjects[nr].statement;
// nr++;
// subject.innerHTML = subjects[nr].title;

var next = function(event){
	nr++;
	choices.push("skip");
	console.log(choices);
	title.innerHTML = subjects[nr].title;
	subject.innerHTML = subjects[nr].statement;
}
var eens = function(event){
	nr++;
	choices.push("pro");
	console.log(choices);
	title.innerHTML = subjects[nr].title;
	subject.innerHTML = subjects[nr].statement;
}
var geen = function(event){
	nr++;
	choices.push("ambivalent");
	console.log(choices);
	title.innerHTML = subjects[nr].title;
	subject.innerHTML = subjects[nr].statement;
}
var oneens = function(event){
	nr++;
	choices.push("contra");
	console.log(choices);
	title.innerHTML = subjects[nr].title;
	subject.innerHTML = subjects[nr].statement;
}

var prev = function(event){
	nr--;
	choices.pop();
	console.log(choices);
	title.innerHTML = subjects[nr].title;
	subject.innerHTML = subjects[nr].statement;

}

skip.onclick = next;
back.onclick = prev;
e.onclick = eens;
g.onclick = geen;
o.onclick = oneens;
