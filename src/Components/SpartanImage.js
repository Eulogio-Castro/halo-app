import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const ROOT_API = 'https://www.haloapi.com/profile/h5/'
const headers = {"Ocp-Apim-Subscription-Key" : "e9e1a5bfec4e4675966f7d003cb6482f"}

const ImageWrapper = styled.div`
    text-align: center;
`;


class SpartanImage extends Component{
    constructor() {
        super();
        this.state = {
            url: "",
            loading : true,
            error: '',
        }
    }

    async componentDidMount() {

        var myImage = document.querySelector('img');
        fetch(`${ROOT_API}profiles/ZHeroOfTime/emblem`, {redirect : 'manual' , headers})
        .then(function(response) {
            return response.blob();
        })
        .then(function(myBlob){
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        })
        .catch(function(error){

        });
    }
    

    

    render() {
        const {url, loading, error} = this.state;

        if(loading || error) {
            return <div>{loading ?  'Loading...' : error }</div>;
        }

        


        return (

            <ImageWrapper>
                <span>{url}</span>
                <img src={url} alt="PlayerSpartanEmblem"></img>
            </ImageWrapper>
        );
    }
}

export default SpartanImage;