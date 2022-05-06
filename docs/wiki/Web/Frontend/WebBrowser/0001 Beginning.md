# Beginning - an overview of Web works (based on MDN)

This page is all about the **INVISIBLE TECHNOLOGY** of Web

## Client and Server

- Clients: Your PC/Phone or Applications or Web Browsers which connects to internet.

- Servers: Computers that stores webpages, sites, or apps. Webpages will be downloaded onto clients for display.

## Process before a webpage actually display

1.  DNS - Domain Name Server (Find IP Address)

    The browser goes to the DNS Server, find the server address which runs the website.

2.  TCP/IP - Transmission Control Protocol/Internet Protocol (Establish Connection)

    After connected, Browser sends a HTTP(s) request to the server, asking a copy of the website, which normally means downloading index.html, from the server.

3.  Rendering (Display Website)

    - Process HTML markup and build the DOM tree.
    - Process CSS markup and build the CSSOM tree.
    - Combine the DOM and CSSOM into a render tree.
    - Run layout on the render tree to compute geometry of each node.
    - Paint the individual nodes to the screen.

    "Reflow is the name of the browser for re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document."

    Repaint is the name of the browser for changing the appearance of a node without interfere the layout of the whole page.

    So a reflow will cause repaint, a repaint probably won't cause a reflow.

    Reflow is so expensive because of it has to re-render.

    Repaint is also a expensive process, because it forces browser to verify the visibility of all the other DOM nodes.

    A nice way to reduce reflow and repaint is to use virtual DOM. Why? Because virtual DOM is stored in memory, and it can use diffing algorithm to figure out what has changed without causing reflow or repaint.
