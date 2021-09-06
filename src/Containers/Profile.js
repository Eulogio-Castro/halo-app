import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    text-align: center;
    margin: 10px auto;
`;

const Title = styled.h2`
    padding: 10px 0;
    border-bottom: 1px solid lightGrey;
`;

const Label = styled.span`
    font-weight: bold;
`;

const ListWrapper = styled.ul`
    list-style: none
    text-align: left;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
`;

const ROOT_API = 'https://www.haloapi.com/profile/h5/'
const headers = {"Ocp-Apim-Subscription-Key" : "e9e1a5bfec4e4675966f7d003cb6482f"}

class Profile extends Component{
    constructor() {
        super();
        this.state = {
            data: {},
            loading : true,
            error: '',
        }
    }

    async componentDidMount() {
        try{
            const profile = await fetch(`${ROOT_API}profiles/ZHeroOfTime/appearance`, {headers});
            const profileJSON = await profile.json();

            if (profileJSON){
                this.setState({
                    data: profileJSON,
                    loading: false,
                });
            }
        }
        catch(error){
            this.setState({
                loading: false,
                error: error.message,
            });
        }
    }

    render() {
        const {data, loading, error} = this.state;

        if(loading || error) {
            return <div>{loading ?  'Loading...' : error }</div>;
        }

        


        return (
            <ProfileWrapper>
                <Title>Spartan Profile : {data.Gamertag}</Title>
                <ListWrapper>
                    <ListItem><Label>ServiceTag</Label>{data.ServiceTag}</ListItem>
                    <ListItem><Label>Spartan Company</Label>{data.Company.Name}</ListItem>
                </ListWrapper>
            </ProfileWrapper>
        );
    }
}

export default Profile;