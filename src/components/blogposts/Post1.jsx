import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Text>
                    This is the first blog post on my own website, "Lustin Luola" (Lust's den) :)
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;