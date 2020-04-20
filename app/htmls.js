
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
    'newCharacter':`
        <div class="new-character">
            <div class="arrows left-arrow">
                <i class="fas fa-chevron-circle-left"></i>
            </div>        
                <div class="character-profile">
                    <div class="character-image">
                        <img src="/characters/hanzo/hanzo.gif" />  
                    </div>
                    <div class="character-info">
                        <h4>Choose your fighter!</h4>
                        <h1>Hanzo Lori</h1>
                        <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
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
                                    <div class='percent' style='width:80%;'></div>
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
                                    <div class='percent' style='width:80%;'></div>
                                </div> 
                            </div>
                        </div>
                        <div class="character-select">
                            <button>Select</button>
                        </div>
                    </div>
                </div>
            <div class="arrows right-arrow">
                <i class="fas fa-chevron-circle-right"></i>
            </div>                
        </div>    
    `,
};

module.exports = authForms;