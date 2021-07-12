<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porte Folio Jérémy</title>
    <!-- Normalize -->
    <link rel="stylesheet" href="./styles/normalize.css">
    <!-- Import Custom CSS -->
    <link rel="stylesheet" href="./styles/style.css">

</head>
<body>
    <!-- Header -->
    <header>
        <ul class="ul-header">
            <li id="li1"><a href="#Apropos" id="toApropos" class="light">À Propos</a></li>
            <li id="li2"><a href="#Projets" id="toProjets">Mes Projets</a></li>
            <li id="li3"><a href="#Contact" id="toContact">Me Contacter</a></li>
        </ul>
    </header>

    <!-- Contenu Principal -->
    <main>
        <!-- Section à propos -->
        <section class="sec1" id="Apropos">
            <div class="pres">
                <h1>À Propos</h1><br>
                <h3>Je m'appelle Jérémy LANOUE</h3><br>
                <p>Actuellement en formation
                    Développeur Web & Web Mobile <br>
                    Je recherche un stage pour valider celle-ci
                    du 27/09 au 03/12</p>
                <a href="./pdf/CV_JeremyLANOUE_dev.pdf" class="link-cv">Télécharger mon C.V.</a>
            </div>
        </section>
        <!-- Section mes projets -->
        <section class="sec2" id="Projets">
            <div class="cont">
                <h1>Voici les projets réalisés à ce jour</h1>
                <div>
                    <div class="btn1 anim-btn"><p>Animations CSS</p></div>
                </div>
                <div>
                    <div class="btn2 anim-btn"><p>Bootstrap</p></div>
                </div>
                <div>
                    <div class="btn3 anim-btn"><p>API Javascript</p></div>
                </div>
                <div>    
                    <div class="btn4 anim-btn"><p>HTML CSS</p></div>
                </div>
            </div>
        </section>
        <!-- projet1 -->
        <section class="sec3" id="projet1">
            <div class="flex-sec">
                <div class="div-img">  
                    <img src="./images/animationCSS.png" alt="animationCSS"> 
                </div>
                <div class="btn-img">
                    <div class="btn-projets anim-btn"><p>Retour</p> </div>
                </div>
            </div>
        </section>
        <!-- projet2 -->
        <section class="sec4" id="projet2">
            <div class="flex-sec">
                <div class="div-img">
                    <img src="./images/groupeMusique.png" alt="responsive bootstrap">
                </div>
                <div class="btn-img">
                    <div class="btn-projets anim-btn"><p>Retour</p> </div>
                </div>
            </div>
        </section>
        <!-- projet3 -->
        <section class="sec5" id="projet3">
            <div class="flex-sec">
                <div class="div-img">
                    <img src="./images/projetJSAPI.png" alt="JS API">
                </div>
                <div class="btn-img">
                    <div class="btn-projets anim-btn"><p>Retour</p> </div>
                </div>
            </div>
        </section>
        <!-- projet4 -->
        <section class="sec6" id="projet4">
            <div class="flex-sec">
                <div class="div-img">
                        <img src="./images/siteFraise.png" alt="responsive">
                </div>
                <div class="btn-img">
                    <div class="btn-projets anim-btn"><p>Retour</p> </div>
                </div>
            </div>
        </section>
        <!-- Section me contacter -->
        <section class="sec7" id="Contact">
            <div class="">
                
                <form id="formulaire"  method="post">
                    <div class="cont flex-sec">

                        <h1>Contact</h1>

                        <div class="flex-sec">
                            <label for="nom">Nom Complet</label>
                            <input type="text" name="nom" id="nom" require>
                        </div>

                        <div class="flex-sec">
                            <label for="email">Adresse Mail</label>
                            <input type="email" name="email" id="email" require
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                        </div>

                        <div class="flex-sec">
                            <label for="entreprise">Entreprise</label>
                            <input type="text" name="entreprise" id="entreprise" maxlength="20" require >
                        </div>

                        <div class="flex-sec">
                            <label for="message">Votre Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>

                        <div class="subm-btn">
                            <button class="btn" type="submit" >Valider</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <!-- Liste réseaux sociaux -->
        <ul class="ul-footer">
            <li>
                <a href="https://www.facebook.com/jeremy.lanoue1/"><img src="./logos/facebook.svg" alt="facebook"></a>
            </li>
            <li>
                <a href="https://github.com/Winths1"><img src="./logos/github.svg" alt="github"></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jeremy-lanoue-b36046172/"><img src="./logos/linkedin.svg" alt="linkedin"></a>
            </li>
        </ul>
    </footer>
    
    <!-- JAVASCRIPT -->
    <script src="./script/script.js"></script>

    <!-- PHP -->
    <?php
    if(isset($_POST['message'])){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";

        $message = '<h1>Message envoyé depuis la page Contact de monsite.fr</h1>
        <p><b>Nom : </b>' . $_POST['nom'] . '<br>
        <b>Email : </b>' . $_POST['email'] . '<br>
        <b>Entreprise: </b>' . $_POST['entreprise'] . '<br>
        <b>Message : </b>' . $_POST['message'] . '</p>';

        $retour = mail('jeremylanoue@jerlandew.fr', 'Envoi depuis page Contact', $message, $entete);
    }
    ?>

</body>
</html>