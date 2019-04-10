import React,{Component} from 'react'
import Loader from './LoaderHOC'

class Users extends Component{
    render(){
        return(
            <div>
{                this.props.users.map(user => 
                <div key={user.id}>
                        {user.name}
                </div>
                ) }
            </div>
        )
    }
}

export default Loader(Users, 'users')