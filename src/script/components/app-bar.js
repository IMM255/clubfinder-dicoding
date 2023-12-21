class AppBar extends HTMLElement {
    connectedCallback(){
    //     this._appBar = appBar;
        this.render();
    }

    render(){
        this.innerHTML = `
        <header>
            <div id="appBar" class="app-bar">
                <h2>Club Finder</h2>
            </div>
        </header>
        `;
    }
}

customElements.define('app-bar',AppBar);