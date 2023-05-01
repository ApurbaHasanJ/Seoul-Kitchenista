import React from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Blog = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner/>
    }
    return (
        <div>
            blog
        </div>
    );
};

export default Blog;