import React, { useEffect, useState } from "react";
import { addPost, getPost } from "../../Services/Api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { FaRegEdit } from "react-icons/fa";
        

const Posts = () => {
  const [post, setPost] = useState([]);
  const [visible, setVisible] = useState(false);
  const [addData , setData] = useState({
    title :"",
    body : "",
    userId: 0
  })
 
  const handleChange =(e)=>{
    const {name , value} = e.target
    setData(addData =>({
        ...addData,
        [name]:value
    }))
    console.log(addData)

  }
  const handleSubmit =async(e,id)=>{
    try{
        e.preventDefault()
        let data = {...addData}

       let res = await addPost(data)
       console.log(res)
       console.log("data submitted")
    }
    catch(error)
    {
        console.log(error.message)
    }
  }

  async function fetchPOst() {
    try {
      const res = await getPost();
      console.log(res);
      setPost(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(post);
  useEffect(() => {
    fetchPOst();
  }, []);

  return (
    <div className="post_section">
      <div className="d-flex justify-content-between">
        <div>
          <h3>Posts</h3>
        </div>
        <div>
          <Button onClick={()=>setVisible(!visible)}>Add Post</Button>
        </div>
      </div>

      <div className="  d-flex  flex-row row-gap-3 column-gap-3 flex-wrap mt-3">
        {post.length !== 0 &&
          post.slice(0, 4).map((items, index) => {
            return (
              <div className="" key={index}>
                <Card
                title={items.title.substr(0,40) + "..."}
                className="md:w-22rem"
                >
                <div className="d-flex justify-content-between align-item-center">
                <p className="m-0">
                  {items.body.substr(0,40) + "..."}
                </p>
                <div><FaRegEdit/></div>
                </div>
            
              </Card>
                </div>
            );
          })}
      </div>

      <div className="card flex justify-content-center">
            <Dialog header="Add Post" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <form onSubmit={handleSubmit}>
               <div className="row mt-3">
                    <div className="col-md-6">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" onChange={handleChange}/>

                    </div>
                    <div className="col-md-6">
                        <label>Description</label>
                        <input type="text"name="body" className="form-control" onChange={handleChange}/>

                    </div>
                    <div className="col-md-6">
                        <label>User Id</label>
                        <input type="text"name="userId" className="form-control" onChange={handleChange}/>

                    </div>
                    <div className=" w-100 d-flex mt-2">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
               </form>
            </Dialog>
        </div>
    </div>
  );
};

export default Posts;
