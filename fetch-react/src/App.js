import {Container, Grid, Card, Avatar, CardHeader, IconButton, CardContent, Typography, Link} from "@mui/material";
import {useEffect, useState} from "react";
import {Article, Language, LocalPhone, LocationCity} from "@mui/icons-material";
import {teal, deepOrange} from "@mui/material/colors";

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(0);
    const [commitId,setCommitId]=useState(0);
    const [commits,setCommits]=useState([]);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/users`)
            .then(res => res.json())
            .then(data=> setUsers(data))
            .then(() => {setloading(false)
            })
    }, [])

    const handlePost = (evt) => {
        setId(evt.target.dataset.target)
    }
    const handleCommit = (evt) => {
        setCommitId(evt.currentTarget.dataset.id)
    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/posts?userId=${id}`)
            .then(res => res.json())
            .then(data=> setPosts(data))
            .then(() => {setloading(false)
            })
    }, [id])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/comments?postId=${commitId}`)
            .then(res => res.json())
            .then(data=> setCommits(data))
            .then(() => {setloading(false)
            })
    }, [commitId])
    console.log(loading);
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={4}>

                        {users.map(user => {
                            return (
                                <Card key={user.id}
                                      sx={{marginBottom: 1}}
                                >
                                    <CardHeader sx={{bgcolor: teal[300]}}
                                                data-target={user.id}
                                                onClick={handlePost}
                                                avatar={
                                                    <Avatar sx={{bgcolor: deepOrange[500], cursor:"pointer"}}
                                                            data-target={user.id}
                                                            onClick={handlePost}

                                                    >{user.name[0]}</Avatar>
                                                }
                                                title={user.name}
                                                subheader={user.username}

                                                action={
                                                    <IconButton aria-label="settings"
                                                    >
                                                        <Article/>
                                                    </IconButton>
                                                }
                                    />
                                    <CardContent>
                                        <Typography
                                            variant={"body1"}
                                            color={"blueviolet"}
                                            sx={{display: "flex", alignItems: "center", cursor: "pointer"}}
                                        >
                                            <LocationCity sx={{marginRight: 1}}/>
                                            {user.address.city}
                                        </Typography>
                                        <Link
                                            href={user.phone}
                                            underline="none"
                                            color={"blueviolet"}
                                            sx={{display: "flex", alignItems: "center", cursor: "pointer"}}

                                        >
                                            <LocalPhone
                                                sx={{marginRight: 1}}
                                            />
                                            {user.phone}
                                        </Link>
                                        <Link
                                            href={user.website}
                                            underline="none"
                                            color={"blueviolet"}

                                            sx={{display: "flex", alignItems: "center", cursor: "pointer"}}
                                        >
                                            <Language
                                                sx={{marginRight: 1}}
                                            />
                                            {user.website}
                                        </Link>
                                    </CardContent>

                                </Card>
                            )
                        })}

                    </Grid>
                    <Grid item xs={4}>
                        {
                            posts.map(post=>{
                                return(
                                    <Card sx={{marginLeft: 1, marginBottom:1}}
                                          key={post.id}

                                    >
                                        <CardHeader
                                            onClick={handleCommit}
                                            data-id={post.id}
                                            sx={{bgcolor: teal[500], cursor:"pointer"}}
                                            title={post.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="body2"
                                            >
                                                {post.body}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={4}>
                        {commits.map(commit=>{
                            return(
                                <Card key={commit.id} sx={{marginLeft:1,marginBottom:1}}>
                                    <CardHeader

                                        title={commit.name}
                                        subheader={commit.email}
                                        sx={{bgcolor:teal[300]}}
                                    />
                                    <CardContent>
                                        {commit.body}
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
