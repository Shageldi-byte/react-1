import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Card, CardActionArea } from "@mui/material";

const Product = () => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography>Product name</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product