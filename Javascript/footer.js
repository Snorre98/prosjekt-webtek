'##-IMPORTER NAVBAR MED script og html-tagen <nav-bar></nav-bar>'
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>
      @media screen and (min-width: 1400px){
        footer{
            background-color: #634d8d;
            color:white;
            font-size: 22px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            align-content:center;
            overflow: hidden;
        }
        
        #tekna{
            display: flex;
            flex-direction: row;
            align-self: center;
            max-width: 200px;
            max-height: 200px;
            margin:auto;
            margin-right:70px;
        }
        
        #bunnpris{
            display: flex;
            flex-direction: row;
            align-self: center;
            max-width: 400px;
            max-height:100px; 
            margin-top: 70px;
        }
        
        #facebook{
            display: flex;
            flex-direction: column;
            align-self: space-around;
            max-width: 150px;
            max-height: 220px;
        }
        
        #instagram{
            display: flex;
            flex-direction: column;
            align-self: space-around;
            max-width: 100px;
            max-height: 80px;
            margin: auto;
          /*  position: absolute;
            right: 89%;
            bottom: 50%;*/
        }
        
        #footer_informasjon{
            display:flex;
            flex-direction:column;  
            margin-left:8%;
            flex: 20%;
        }
        
        #footer_socials{
            display: flex;
            flex-direction: column;
            order: 3;
            margin:auto;
            
        }
        
        #socials{
            display:flex;
            flex-direction: column;
            
        }
        
        #footer_map{
            display:flex;
            align-self:center;
            order: 4;
            margin:auto;
            /*position:absolute;
            right:30%;
            bottom: 56%;*/
        }
        
        #map{
         display:flex;
         justify-content: center;
         align-items: center;
         margin:auto;
         width: 70%;
        }
        
        #footer_sponsor{
            display:flex;
            flex-direction: row;
            order: 2;
            flex-grow: 1;
            flex: 65%;
            margin:auto;
        }
        
        #kontakt{
            display: flex;
            flex-direction: column;
        }
        
        #kontakt_email:hover {
            color: #fffb05;
        }
        
        #hoved_adresse:hover {
            color: #fffb05;
        }
        
        #facebook:hover{
            transform:scale(1.2);
        }
        
        #instagram:hover{
            transform:scale(1.2);
        }
        
        #tekna:hover{
            transform:scale(1.1);
        }
        
        #bunnpris:hover{
            transform:scale(1.1);
        }
    }
    
    
    @media screen and (max-width :1399px){
        footer{
            background-color: #634d8d;
            color:white;
            font-size: 22px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            align-content:center;
            overflow: hidden;
        }
        
        #tekna{
            display: flex;
            flex-direction: column;
            align-self: center;
            max-width: 60%;
            max-height:60%;
            margin:auto;
        }
        
        #bunnpris{
            display: flex;
            flex-direction: column;
            align-self: center;
            max-width: 100%;
            max-height:100px;
            margin:auto;
        }
        
        #facebook{
            display: flex;
            flex-direction: column;
            align-self: center;
            max-width: 150px;
            max-height: 220px;
            margin:auto;
            margin-bottom: 10px;
        }
        
        #instagram{
            display: flex;
            flex-direction: column;
            align-self: center;
            max-width: 100px;
            max-height: 80px;
            margin:auto;
        }
        
        #footer_informasjon{
            display:flex;
            flex-direction:column;  
        }
        
        #footer_socials{
            display: flex;
            flex-direction: row;
            order: 2;
        }
        
        #socials{
            display:flex;
            flex-direction: row;
            
        }
        
        #footer_map{
            display:flex;
            align-self:center;
            order: 3;
        }
        
        #map{
         display:none;
         justify-content: center;
         align-items: center;
         margin:auto;

        }
        
        #formal_map{
            width:75vw;
        }
    
        #footer_sponsor{
            display:flex;
            flex-direction: column;
            order: 4;
            flex-grow: 1;
            margin:auto;
        }
        
        #kontakt{
            display: flex;
            flex-direction: column;
        }
        
        #kontakt_email:hover {
            color: #fffb05;
        }
        
        #hoved_adresse:hover {
            color: #fffb05;
        }
        
        #facebook:hover{
            transform:scale(1.2);
        }
        
        #instagram:hover{
            transform:scale(1.2);
        }
        
        #tekna:hover{
            transform:scale(1.1);
        }
        
        #bunnpris:hover{
            transform:scale(1.1);
        }
    }
    
    
      
      </style>

      <footer>
        <section id="footer_informasjon">
            <div id="kontakt" class="footer_div">
                <h4 id="kontakt_informasjon">
                    Kontakt Informasjon:
                </h4>
                <p id="kontakt_email">
                    Badcom@gmail.com
                </p>
                <h4 id="adresse">
                    Besøksadresse:
                </h4>
                <p id="hoved_adresse">
                    Gamle Kjemi, Etasje K, Rom 018
                </p>
            </div>
        </section>
        <!--Bildene vises fortsatt ikke, har ikke noe å si at der er wrappa i en figure--->
        <section id="footer_socials">
            <div id="socials">
                <figure>
                    <a href="https://www.facebook.com/padlingen/">
                        <img src="../IMG/Facebook-logo.png"  alt="Facebook" id="facebook" class="social_media">
                    </a>
                </figure>
                <figure>
                    <a href="https://www.instagram.com/badekarpadlingen/?igshid=YmMyMTA2M2Y%3D">
                        <img src="../IMG/Instagram-logo.png" alt="Instagram" id="instagram" class="social_media">
                    </a>
                </figure>
            </div>
        </section>
        <section id="footer_map">
            <div id="map">
                <iframe id="formal_map" width="1100" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"src="https://use.mazemap.com/embed.html#v=1&zlevel=-1&center=10.403479,63.418106&zoom=20.7&sharepoitype=poi&sharepoi=7942&campusid=1&utm_medium=iframe"></iframe>
            </div> 
        </section>
        <!--Embedded MazeMap vet jeg ikke helt hvordan jeg gjør, hvis vi skal bruke API'en til Mazemap er vi nødt til å linke både css og JS til eksterne filer fra MazeMap. Noe jeg tror vi ikke kan gjøre i denne oppgaven. Planen derreter var bare å legge inn en link samt med et bilde fra Gamle kjemi.-->
        <section id="footer_sponsor">
            <div id="sponsor1" class="footer_div">
                <figure >
                    <a href="https://www.tekna.no/en/">
                        <img src="../IMG/tekna_logo.png" alt="Tekna Logo" id="tekna">
                    </a>
                </figure>
            </div>
            <div id="sponsor2" class="footer_div">
                <figure >
                    <a href="https://www.bunnpris.no">
                        <img src="../IMG/bunnpris_logo.png" alt="Bunnpris Logo" id="bunnpris">
                    </a> 
                </figure>
            </div>
        </section>
    </footer>

      `;
    }
  }
  customElements.define('footer-comp', Footer);