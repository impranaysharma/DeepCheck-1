
const name = prompt("What should we call you?","Learner");
document.getElementById("welmsg").innerHTML =
 "Welcome " + name + " !";
var countDownDate = new Date("Jan 1, 2024 00:00:05").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function paci(){
    if (document.getElementById("hide").style.display!=="none"){
        document.getElementById("hide").style.display="none";}
    document.getElementById("headline").innerHTML="Pacific Ocean";
    document.getElementById("dept").innerHTML="<br>Dept : 10,911 m<br><br>Water volume	710,000,000 km";
    document.getElementById("desc").innerHTML=`The Pacific Ocean is the largest and deepest of Earth's five oceanic divisions. It e
    xtends from the Arctic<br> Ocean in the north  to the Southern Ocean (or, depending on definition, to Antarctica) in the south, and is<br> bounded 
    by the continents of Asia and Oceania in the west and the Americas in the east.
    At 165,250,000 square<br> kilometers (63,800,000 square miles) in area (as defined with a southern Antarctic border
        ), this<br> largest division of the World Ocean and the hydrosphere covers about 46% of Earth'
    s water surface<br> and about 32%  of its total surface area, larger than Earth's 
    entire land area combined<br> 148,000,000 km2 (57,000,000 sq mi).`;
}
function Indian(){
    if (document.getElementById("hide").style.display!=="none"){
        document.getElementById("hide").style.display="none";}
    document.getElementById("headline").innerHTML="Indian Ocean";
    document.getElementById("dept").innerHTML="<br>Dept :7,450 m<br><br>Surface area	70,560,000 km";
    document.getElementById("desc").innerHTML=`The Indian Ocean is the third-largest of the world's five oceanic divisions, covering<br>
     70,560,000 km2 (27,240,000 sq mi) or ~19.8% of the water on Earth's surface. It is bounded by Asia <br>to the north, Africa to the west and 
    Australia to the east. To the south it is bounded by the Southern Ocean<br> or Antarctica, depending on the definition in use. Along its 
    core, the Indian Ocean has<br> some large marginal or regional seas such as the Arabian Sea, Laccadive Sea, Bay of Bengal and Andaman Sea.<br>The Indian Ocean 
    has been known by its present name since at least 1515 when the<br> Latin form Oceanus Orientalis Indicus ("Indian Eastern Ocean") 
    is attested, named after the <br>Indian subcontinent, which projects into it. It was earlier known as the Eastern Ocean, a term t
    hat was still<br> in use during the mid-18th century (see map), as opposed to the Western Ocean (Atlantic) before the Pacific <br>was surmised.`;

}
function Atlantic(){
        if (document.getElementById("hide").style.display!=="none"){
            document.getElementById("hide").style.display="none";}
        document.getElementById("headline").innerHTML="Atlantic Ocean";
        document.getElementById("dept").innerHTML="<br>Dept :8,486 m<br><br>Water volume	310,410,900 km";
        document.getElementById("desc").innerHTML=`The Atlantic Ocean is the second-largest of the world's five oceans, with an area of about
        <br> 106,460,000 km2 (41,100,000 sq mi).[2][3] It covers approximately 20% of Earth's surface and about 
        <br>29% of its water surface area. It is known
         <br>to separate the "Old World" of Africa, Europe, and Asia from the "New World" of the Americas
         <br> in the European perception of the World.

        <br>Through its separation from Africa, Europe, and Asia from the Americas, the Atlantic Ocean has played a 
        <br>central role in the development of human
         <br>society, globalization, and the histories of many nations. While the Norse were the first known humans to 
         <br>cross the Atlantic,
         <br>it was the 1492 expedition of Christopher Columbus that proved to be the most consequential. Columbus's 
         <br>expedition ushered in an 
        <br>age of exploration and colonization of the Americas by European powers, most notably Spain, France, 
        <br>Portugal, and the United Kingdom.`;}
function Southern(){
            if (document.getElementById("hide").style.display!=="none"){
                document.getElementById("hide").style.display="none";}
            document.getElementById("headline").innerHTML="Southern Ocean";
            document.getElementById("dept").innerHTML="<br>Dept :7,432 m<br><br>Area: 20.33 million km";
            document.getElementById("desc").innerHTML=`The Southern Ocean, also known as the Antarctic Ocean,[1]
            <br>[note 4] comprises the southernmost waters of the world ocean, generally taken to be south of 60° S latitude <br>
            and encircling Antarctica.[4] With a size of 20,327,000 km2 (7,848,000 sq mi), it is regarded as the <br>second-smallest of 
            <br>the five principal oceanic divisions: smaller than the Pacific, Atlantic,<br>
             and Indian oceans but larger than the Arctic Ocean.[5]
            <br> Since the 1980s, the Southern Ocean has been subject to rapid climate change, <br>
            which has led to changes in the marine ecosystem.[6]
           <br> By way of his voyages in the 1770s, James Cook proved that waters encompassed <br>the southern latitudes of the globe.`;
        }
function Arctic(){
                if (document.getElementById("hide").style.display!=="none"){
                    document.getElementById("hide").style.display="none";}
                document.getElementById("headline").innerHTML="Arctic Ocean";
                document.getElementById("dept").innerHTML="<br>Dept :5,450 m<br><br>Area: 14.06 million km";
                document.getElementById("desc").innerHTML=`The Arctic Ocean is the smallest and shallowest of the world's 
                <br>five major oceans.[1] It spans 
                <br>an area of approximately 14,060,000 km2 (5,430,000 sq mi) and is known as one of the coldest of oceans.
                <br> The International Hydrographic Organization (IHO) recognizes it as an ocean, although some 
                <br>oceanographers call it the Arctic Mediterranean Sea.[2] It has been also been described as an 
                <br>estuary of the Atlantic Ocean.[3][4] It is also seen as the northernmost part of the all-encompassing World Ocean.
                <br>The Arctic Ocean includes the North Pole region in the middle of the Northern Hemisphere and 
                <br>extends south to about 60°N. The Arctic Ocean is surrounded by Eurasia and North America, and the borders 
                <br>follow topographic features: the Bering Strait on the Pacific side and the 
                <br>Greenland Scotland Ridge on the Atlantic side. `;   
            }


