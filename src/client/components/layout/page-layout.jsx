import React from 'react';
import Menu from './page-menu';

class PageLayout extends React.Component {
 
 
    getStyle(){
        return {
            root:{
                
            },
            aside:{
                width: "325px",
                padding: "24px",
                float: "left",
                boxSizing: "border-box"
            },
            main:{
                width: "calc(100% - 330px)",
                float: "right",
                padding: "24px",
                boxSizing: "border-box",
            }
        }
    }
    
    render() {
        
        var style = this.getStyle();
        
        return (
            <div style={style.root} >
                <aside style={style.aside} >
                    <Menu />
                </aside>
                <main style={style.main} >
                    {this.props.children}
                </main>
            </div>
        );
    }
}
 

export default  (PageLayout);