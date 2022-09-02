import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native' 

const Headers:React.FC<{onSearch:(text:string)=>void}> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const onChangeSearch = (query:string) => setSearchQuery(query);

    useEffect(()=>{
      onSearch(searchQuery)
    },[searchQuery])
    return (
        <HeaderContainer  >
            <Searchbar
                placeholder="Start searching ..."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </HeaderContainer>
    );
};
const HeaderContainer = styled.View`
    padding:${props=>props.theme.spacing._md};
`

export default Headers;
