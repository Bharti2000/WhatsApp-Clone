import React, { createContext } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {

    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    height: '95%',
                    top: 22,
                    width: '29.8%',
                    left: 58,
                    boxShadow: 'none'
                }
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: 'unset'
                }
            }
        }


    })

    return (
        <TemplateContext.Provider>

            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>

        </TemplateContext.Provider>
    )
}
export default TemplateProvider;