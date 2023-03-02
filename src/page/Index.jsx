import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Index = () => {
    const navigator = useNavigate();
    function changePage(path) {
        navigator(path)
    }

    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex' }}>
                <Button variant="outlined" color="secondary" onClick={() => changePage('/')}>Home</Button>
                <Button variant="outlined" color="secondary" tton onClick={() => changePage('products')}>Products</Button>
                <Button variant="outlined" color="secondary" onClick={() => changePage('login')}>Login</Button>
            </div>

            <Outlet />
        </div>
    )
}

export default Index

