import {type FC, useState} from "react";
import * as React from "react";
import {Outlet, Link} from "react-router-dom";
import type {RouteType} from "../../utils/shop-types.ts";
import {AppBar, Box, Tab, Tabs} from "@mui/material";

type Props = {
    items: RouteType[],
    sub?: string
}
const NavigatorDescTop: FC<Props> = ({items}) => {

    const [value, setValue] = useState(0)
    const handleOnChange = (_e:React.SyntheticEvent, newValue:number) => {
        setValue(newValue)
    }
    return (
        <Box sx={{mt: '50px'}}>
            <AppBar sx={{backgroundColor:'lightgrey'}}>
                <Tabs value={value} onChange={handleOnChange}>
                    {
                        items.map(item =>
                            <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                        )
                    }
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDescTop;