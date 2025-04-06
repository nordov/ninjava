
const authForms = {

    'justPlay': `
        <div class="auth-form">
                    <h1 id="clickNPlay">Click to play!</h1>
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
                                <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
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
                    <button id="chosen">Select</button>
                </div>
            </div>`,
    },
    'movesSelection':
        `<div class="moves-selection" id="moves">
            <form>
                <h3>Choose your battle moves!</h3>
                <div class="round">
                    <div class="round-label">
                        <h3>Round I</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>
                

              <div class="round">
                    <div class="round-label">
                        <h3>Round II</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>
                

                <div class="round">
                    <div class="round-label">
                    <h3>Round III</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <button id="fight">FIGHT!</button>
                </div>                               
            </form>
        </div>`
};

module.exports = authForms;