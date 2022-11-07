class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>nav{
        position: sticky;
        z-index: 99;
        display: none;
        justify-content: right;
        }
        nav ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        }
        nav ul li a{
        text-decoration: none;
        color: white;
        display: block;
        margin: 10px;    
        padding: 10px;
        border-radius: 15px;
        background: #634d8d;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: normal;
        text-align: center;
        }
        .nav_senter{
        display: none;
        }
        .nav_ikon{
            position:sticky;
            float: right; 
            margin: 15px 10px;
            height: 50px;
            width: 50px;
            border-radius: 5px;
            background-color: #634d8d;
            background-image: url("burgerIkon2.svg");
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        .mobil_logo{
            position:sticky;
            display: inline-block;
            margin:10px 5px;
            height: 70px;
            width: 70px;
            background-image: url("BadCom_logo-min.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 70px;
            cursor: pointer;
            z-index: 99;
        }
        .nav_check{
            display: none;
        }
        .nav_check:checked ~ nav{
            display:flex; 
            }
    
        .nav_check:checked + .nav_ikon{
            background-image: url("kryss2.svg");
        }
        nav ul li a:hover{
            background-color: #9e8ebb;
        }
        @media screen and (min-width: 950px) {
            nav{
            position: sticky;
            top: 0px;
            text-align: center;
            z-index: 99;
            display: flex; 
            justify-content: center;
            align-items: center;
            color:white;
    
        }
        nav ul{
            display: flex;
            align-items: center;
            margin:0;
        }
    
        nav ul li a{
            color:white;
            text-decoration: none;
            display: inline-block;
            margin: 20px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: normal;
            background-color: #634d8d;
            padding: 5px;
            border-radius: 15px;
            width: 125px;
            min-width: 125px;
        }
    
        nav ul li a:hover{
            background-color: #9e8ebb;
            transform: scale(1.25);
        }
        .nav_senter:hover{
            background: none;
            transform: scale(1.25);
        }
     
        .nav_senter{
            display: inline-block;
            margin: 11px;
            font-family: 'Courier New', Courier, monospace;
            padding: 10px;
            background: none;
    
        }
        .nav_logo{
            display: block;
            height: 125px;
            width: 125px;
            background-image: url("BadCom_logo-min.png");
            background-size: 125px;
        }
        .nav_ikon{
            display: none;
        }
        .mobil_logo{
            display: none;
    
        }
    }</style>
      <!--navbarSTART-->
      <a class="mobil_logo" href="#" ></a>
      <input class="nav_check" type="checkbox" id="nav_check" />
      <label class="nav_ikon" for="nav_check"></label>
      <nav>
      <ul>
      <!--Venstre navn linker-->
      <li>
      <a href="https://www.nrk.no/">INFO</a>
      </li>
      <li>
      <a href="#">VERV</a>
      </li>
      <!--Sentrert navbar logo-->
      <li class="nav_senter">
      <div class="nav_logo"></div>
      </li>
      <!--Høyre  linker-->
      <li>
      <a href="#">CHALLENGES</a>   
      </li>
      <li>
      <a href="#">KONTAKT OSS</a>
      </li>
      </ul>
      </nav>
      <!--NAVBAR SLUTT-->
      `;
    }
  }
  customElements.define('main-header', Header);