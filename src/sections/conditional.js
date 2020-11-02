<<<<<<< HEAD
import React, { Component } from "react";

class ComponenteA


export default class ConditionalSection extends Component {
  render() {
    return (
      <div>
        <h4>Condicional REndering</h4>
        <ComponenteA />
        <ComponenteB />
      </div>
    );
  }
}
=======
import React, { Component } from 'react';

class ComponenteA extends Component {
    render() {
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component {
    render() {
        return <p>Componente B</p>
    }
}

/*const useConditionalRendering = (mostrarA) => {
    if (mostrarA) {
        return <ComponenteA />
    }
    return <ComponenteB />
}*/

export default class ConditionalSection extends Component {

    constructor() {
        super()
        this.state = { mostrarA: true }
    }

    render() {
        /*  const conditionalComponent = this.state.mostrarA
              ? <ComponenteA />
              : <ComponenteB /> */

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.mostrarA
                    ? <ComponenteA />
                    : <ComponenteB />
                    /*conditionalComponent*/
                }
            </div>
        );
    }
}
>>>>>>> 7e556a27cbc89cb4d47c65d03fde7df522c2f6d3
