const forEachs=Wrap=>
class extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           Wrap.forEach(item=>{
               console.log(item)
           })
        );
    }
}

export default forEachs;