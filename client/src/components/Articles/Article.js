import React from "react";
import { Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';
    

export const Article = ( props ) => {
  return (
   <div>
      <Card>
          <CardText style={{
              fontWeight: "bold",
              backgroundColor: "#777",
            }}>
            {props.content}
          </CardText>
      </Card>
    </div>
  );
};
