import React from 'react';
import './App.css';
import marked from 'marked';
import jquery from 'jquery';



marked.setOptions({
  breaks: true,
})
const renderer = new marked.Renderer();
renderer.link= function(href,title,text){
  return `<a target='_blank' href='${href}'>${text}` + '</a>';
}

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      input: initial,
      update: initial
    }
  
  
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      update: event.target.value,
      input:event.target.value
    })
  };

  
  render(){
    return (
      <div id='general'>
        
        <textarea id='editor' onChange={this.handleChange} value={this.state.input}></textarea>
        <div id='preview-box'>
          <Preview update={this.state.update}/>
        </div>
      </div>
    )
  };
};

const Preview = (props) => {
    return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.update)}} />
    )
}

const initial=
`# Aloha There! 

## This Is My Interactive Markdown Project!

### It is the first time I am building a web application using React, so please bear with me a moment.

Although I have done some cool stuff already, such as:
- random quote machine
- technical documentation site
- personal portfolio
- staff manager using object-oriented programming, etc.

On the way, I also learned some pretty powerful things.
1. My numero uno is **PYTHON**
2. But I also like _JavaScript_
3. I cannot forget about HTML and CSS
4. I hope the list will go on and ON ...

## You can check out some of my projects on my [GitHub](https://github.com/petra-vozarova) page.

It is a rough path but you know ...
Don't wish it was easier. Wish you were better.
                                                *Jim Rohn*

Yeah, I know.. So let's just illustrate my mindset very quick:

\`\`\`
    function success(hard-work, dedication) {
      let results = hard-work + dedication;
      return results;
    };
\`\`\`

Or in a much quicker way: **\` const results =(hardwork, dedication) => {hardwok + dedication}; \`**

I think this is it for now.. so keep it up and peace out!

![Picture of colorful leafs](https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)

`

/*$('body').css('background-color', '#969696')*/

export default App;
