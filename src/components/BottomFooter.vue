<template>
    <footer>
        <div id="footer-menu">
            <div id="plus">
                <a href="#">Home</a><span>|</span>
                <a href="#">Termos de uso</a><span>|</span>
                <a href="#">Política de privacidade</a><span>|</span>
                <a href="#">Patch Notes</a>
            </div>
        </div>
        <div id="footer-socials">
            <ul>
                <li>
                    <a href="#"><img src="../assets/footer/twitter.svg" class="icon"></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/footer/youtube.svg" class="icon"></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/footer/twitch.svg" class="icon"></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/footer/instagram.svg" class="icon"></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/footer/facebook.svg" class="icon"></a>
                </li>
            </ul>
        </div>
        <div id="contact">
            <p><span>Contato:</span> contato@qualquerumae.com.br</p>
        </div>
    </footer>
</template>
<style>
    footer{
        background-color: var(--footer-bg);
        width: 100%;
        min-height: 100px;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        border-top: 1px solid white;
        padding: 10px 0px 10px 0px;
    }
    #footer-menu div{
        display: flex;
        flex-direction: row;
        gap: 3px;
        color: var(--font-color-menu);
        text-transform: uppercase;
        font-weight: 600;
    }
    #footer-menu div a{
        color: var(--font-color-menu);
        transition: color .2s linear;
    }
    #footer-menu div a:hover{
        color: var(--color-hover);
    }
    #footer-socials ul{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }
    .icon{
        width: 22px;
        transition: transform .2s linear;
    }
    .icon:hover{
        transform: scale(1.2);
    }
    #contact p{
        color: var(--font-color-menu);
    }
    #contact p span{
        color: var(--color-);
    }
    @media (max-width: 1000px) {
        #footer-menu div{
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
        }
        #footer-menu div span{
            display: none;
        }
    }
</style>
