import React, { Component } from 'react';
import Blog from './Blog';
import NewBlog from './NewBlog';
import Axios from 'axios';
import {HeroH1,HeroContent,HeroP,HeroContainer,HeroBg } from './BlogElements'
import Moment from 'moment';
Moment.locale('iw-IL');
export default class BlogsDeliveryMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }
    componentDidMount() {
        Axios.post('http://localhost:3333/blog/fetchAllBlogs').
            then(res => {
                this.setState({
                    blogs: res.data
                });
                console.log(this.state.blogs)
            }
            );

    }
    componentDidUpdate()
    {
        Axios.post('http://localhost:3333/blog/fetchAllBlogs').
        then(res => {
            this.setState({
                blogs: res.data
            });
        }
        );
    }
    render() {
        return (
                <HeroContent>
                <HeroH1>OUR BLOG</HeroH1>
                <HeroP>
                Don't forget to catch up 
                </HeroP>
                {
                    this.state.blogs.map(item => <Blog title={item.title} text={item.articel} author={item.author} date={Moment(item.date).format('DD/MM/YYYY')} imgSrc={item.imgSrc} />)
                }

                </HeroContent>


        );
    }

}