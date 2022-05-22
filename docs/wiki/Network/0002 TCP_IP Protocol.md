

TCP/IP is a 5 layer model.

  - Physical - (data in binary, 010001...) - (Hubs, Cables, Repeaters)

  - Data Link - (Frame Header - Frame Data) - (Bridges, Modem, Network Interface Card)

  - Internet - (IP header - IP Data) - (Routers, Bidge Routers)

  - Transport - (UDP header - UDP data, User Datagram Protocol) - (Gateways, Firewall)

  - Application - (Data) - (PC, Phone, Server, with application running)

  TCP/IP is **full duplex** protocol, "meaning that each TCP connection supports a pair of byte streams, one flowing in each direction."

  So with the idea of full duplex, let's learn the three handshakes (establish connection) and the four handshakes(end connection).

  - Three Handshakes (Establish Full Duplex Connection)

    1.  Client -> Server

        Server get:

        | Client      | Server         |
        | ----------- | -------------- |
        | send normal | recieve normal |

    2.  Server -> Client

        Client get:

        | Client                | Server                |
        | --------------------- | --------------------- |
        | send & recieve normal | send & recieve normal |

        Client confirms both side ready.

        Server can't confirm client recieve normal.

    3.  Client -> Server

        Server get:

        | Client                |
        | --------------------- |
        | send & recieve normal |

        Server confirms both side ready. A full duplex connection is established.

  - Four Handshakes (End Full Duplex Connection)

    1.  Client -> Server

        Server get:

        | Client                    |
        | ------------------------- |
        | request to end connection |

        Status:

        | Client     | Server |
        | ---------- | ------ |
        | FIN_WAIT_1 |        |

    2.  Server -> Client

        Client get:

        | Server                                       |
        | -------------------------------------------- |
        | prepare to end connection, waiting for close |

        Status:

        | Client     | Server     |
        | ---------- | ---------- |
        | FIN_WAIT_2 | CLOSE_WAIT |

    3.  Server -> Client

        ```
        if (server has leftover data) {
          send data to client;
        }
        send end message(FIN) to client;
        ```

        Client get:

        | Server                                                          |
        | --------------------------------------------------------------- |
        | ready to end connection, final check for client's close confirm |

        Status:

        | Client | Server   |
        | ------ | -------- |
        |        | LAST_ACK |

    4.  Client -> Server

        Server get:

        | Client                                      |
        | ------------------------------------------- |
        | confirm to end connection, waiting to close |

        Status:

        | Client    | Server |
        | --------- | ------ |
        | TIME_WAIT | CLOSE  |

        ```
        if (no response after 2MSL(maximum segment lifetime)) {
          client close connection
        }
        ```

    