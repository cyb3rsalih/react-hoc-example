import React,{Component} from 'react'
import Loader from './LoaderHOC'

class Posts extends Component{
    render(){
        return(
            <div>
{                this.props.posts.map(post => 
                <div key={post.id}>
                        {post.title}
                </div>
                ) }
            </div>
        )
    }
}

export default Loader(Posts, 'posts')