
const authForms = {

    'justPlay': `
        <div class="auth-form">
                    <h1 id="clickNPlay">Click to play!</h1>
        </div>      
    `,
    'singIn': `
        <div class="auth-form" id="auth-form">
            <form >
                <h1>Sign In!</h1>
                <a id="swap" href="#">No account? Sign up here</a>
                
                <input type="hidden" id="action" value="login" />
                
                <div class="row">
                    <i class="fas fa-envelope"></i>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Email"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input
                        type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                
                <div class="row">
                    <input type="submit" value="Sign In" />
                </div>
            </form>
        </div>      
    `,
    'singUp': `
        <div class="info-wrap auth-form" id="auth-form">
            <form >
                <h1>Sign Up</h1>
                <a id="swap" href="#">Have an account? Sign in here</a>

                <input type="hidden" id="action" value="register" />

                <div class="row">
                    <i class="fas fa-envelope"></i>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Email"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-user"></i>
                    <input 
                        type="text" 
                        id="handle" 
                        placeholder="Handle"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter a password" 
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input 
                        type="password" 
                        id="password2"
                        placeholder="Confirm your password" 
                    />
                </div>

                <div class="row">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>      
    `,
    'characters':{
        'default':
            `<div class="new-character">
                <div class="arrows">
                    <i class="fas fa-chevron-circle-left" id="left-arrow"></i>
                </div>        
                    <div class="character-profile" id="character-profile">
                        <div class="character-image">
                            <img src="/characters/hanzo/hanzo.gif" />  
                        </div>
                        <div class="character-info">
                            <h1>Hanzo Lori</h1>
                            <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
                            <div class="character-specs">
                                <div class="skill">
                                    <h4>Attack:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:95%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Defense:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:90%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Agility:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:75%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Speed:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:70%;'></div>
                                    </div> 
                                </div>
                            </div>
                            <div class="character-select">
                                <button>Select</button>
                            </div>
                        </div>
                    </div>
                <div class="arrows">
                    <i class="fas fa-chevron-circle-right" id="right-arrow"></i>
                </div>                
            </div>`,        
        'Hanzo':
            `<div class="character-image">
                <img src="/characters/hanzo/hanzo.gif" />  
            </div>
            <div class="character-info">
                <h1>Hanzo Lori</h1>
                <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:90%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
        'Wy-Te Pel':
            `<div class="character-image">
                <img src="/characters/wy-te/wy-te.gif" />  
            </div>
            <div class="character-info">
                <h1>Wy-Te Pel</h1>
                <p>Al she wanted was a calm, peaceful life, but the path her twin sister took forced her to follow after and help keep her safe. Binded by a promise made to her dad who died, on her arms when she was just a kid, sealing her fate.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:97%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
        'Poin Tee-Hut':
            `<div class="character-image">
                <img src="/characters/poin/poin.gif" />  
            </div>
            <div class="character-info">
                <h1>Poin Tee-Hut</h1>
                <p>Born in a family of farmers, Poin learned to respect nature and everything that comes from it. Normally considered very neutral and uninvolved his only feud is with those who disrespect Mother Earth.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:90%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:93%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:87%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
        'Gonz O-Bits':
            `<div class="character-image">
                <img src="/characters/gonzo/gonzo.gif" />  
            </div>
            <div class="character-info">
                <h1>Gon Zo-Bits</h1>
                <p>Always first of his class, with a great passion for science and technology. He found himself with no choise to learn martial arts to be able to defend himself from his daily bullies. Mixing his two best skills he can easily become a very deadly machine</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:80%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:83%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
        'Rico Star':
            `<div class="character-image">
                <img src="/characters/rico/rico.gif" />  
            </div>
            <div class="character-info">
                <h1>Rico Star</h1>
                <p>As a wealthy and resourceful man, Rico never really knew what path to give to his life. But an unhealthy amount of comic books "research", as he called it, made it clear for him, to become the greatest vigilante there ever was. </p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:80%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:98%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
        'Kateena':
            `<div class="character-image">
                <img src="/characters/kateena/kateena.gif" />  
            </div>
            <div class="character-info">
                <h1>Kateena</h1>
                <p>Her dad was an accountant for the most dangerous drug lord in South America until his best friend, falsely accused him of stealing from his client. Her whole family was brutally murdered in front of her. Now she has dedicated her life to have all her dad's enemies pay for their one mistake... Spare her live.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:97%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button>Select</button>
                </div>
            </div>`,
    }
};

module.exports = authForms;