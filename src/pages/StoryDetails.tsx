import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { generateImageTag } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export function StoryDetails() {
  const { id } = useParams();
  let navigate = useNavigate();

  const { stories, status } = useSelector((state: RootState) => ({
    ...state.stories,
  }));

  const story = stories.filter((story) => story.storyId === id)[0];

  return (
    <>
      <article className="container story-details">
        {status === "pending" && <h3>Loading</h3>}

        {story && (
          <div>
            <h1>{story.story.headline}</h1>

            <div className="title-block">
              <span> Published on {story.publishedDate}</span>
              <button onClick={() => navigate("/")}>Go back</button>
            </div>
            <p>{story.story.intro}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              distinctio voluptate ut maiores unde, similique inventore
              consequatur labore nihil cum odit veritatis! Reprehenderit beatae
              autem iusto dolorem iure. Magni, praesentium! Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. A illo modi ullam ut
              eligendi accusamus exercitationem facilis itaque. Explicabo fuga
              rerum nesciunt laboriosam aliquam animi ut molestias ad autem
              magni!
            </p>
            <img
              src={story.story.images[0].src}
              srcSet={generateImageTag(story.story.images)}
              alt={story.story.images[0].caption}
              width="50%"
            />
            <p>
              Repellendus nemo qui assumenda, consectetur accusantium mollitia
              dignissimos ut blanditiis ducimus alias laborum quos, autem porro
              animi, enim natus quibusdam esse at culpa. Error quam omnis facere
              modi a est. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sequi perspiciatis amet hic similique explicabo ratione
              accusantium, cupiditate fugit, temporibus laudantium dignissimos
              nobis rerum. Pariatur odio eaque deserunt voluptatum quae officia
              ea, consectetur sit ducimus quo dolores optio eveniet et libero
              modi facere soluta veritatis placeat illo nisi id illum alias
              distinctio excepturi. Necessitatibus ex harum quam numquam! Cumque
              consectetur, dolore aspernatur ipsum accusantium dignissimos
              perspiciatis expedita earum sit placeat reprehenderit molestiae
              doloribus ipsa deserunt vel, voluptatibus quos architecto natus?
              Officia reiciendis ea, nam dicta mollitia deserunt perferendis
              fuga blanditiis ex obcaecati nisi atque illum neque quidem, optio
              unde delectus, dolore aliquam dignissimos quasi odit aut hic in.
              Veniam, exercitationem. Quisquam temporibus qui, rerum officia, et
              autem, aliquam culpa voluptatibus sapiente veritatis nisi ad non!
              In, laboriosam illo! Sequi aliquid rem facere fugit ea harum
              assumenda et maiores expedita magni consectetur quo libero
              reprehenderit explicabo, quis nulla beatae repellendus deleniti
              exercitationem perferendis, cumque dolorem? Dolorum nostrum sint
              perferendis eos repellendus nobis aut laborum iusto possimus.
              Animi cum facere autem, aliquam quam neque temporibus laborum
              voluptatum rerum aspernatur, sint, eius molestiae? Excepturi at ea
              deserunt adipisci recusandae suscipit, repellendus magnam neque
              assumenda ipsum eius? Asperiores nisi, nobis aliquid
              necessitatibus labore repellat ab illum maiores inventore, esse
              cupiditate aliquam non quo incidunt commodi aperiam iusto id
              voluptates! Asperiores, delectus ad ex quibusdam rem quis optio
              ipsa, fuga odit nihil illo totam iusto corporis unde quasi laborum
              doloribus fugiat amet nesciunt odio molestiae natus eligendi aut.
              Id itaque eum voluptatem dignissimos magni exercitationem
              obcaecati sunt doloribus neque quae modi nisi ex dolorem
              voluptates, omnis deserunt provident. Minima quibusdam quo
              molestias dolores voluptates quas quaerat fuga ut officia ipsa
              fugiat neque qui vero, distinctio tenetur! Architecto eveniet
              tempore sit quod quas necessitatibus doloremque, omnis, possimus
              esse, nihil alias aperiam. Aut quia nam deleniti accusamus
              voluptatem.
            </p>
            <p>
              Labore ratione consectetur harum saepe at fugiat voluptas deleniti
              perferendis necessitatibus atque ipsam ab similique explicabo vero
              autem, sit quasi praesentium quae non. Quod obcaecati facere
              assumenda nemo voluptatibus quae.
            </p>
            <p>
              Molestias aut error consequuntur dolorum dolor voluptates ea sequi
              tempore eligendi tempora, reprehenderit porro! Tempora voluptas,
              quam quibusdam neque sequi iure qui eius nostrum aspernatur
              eligendi. Magni, nostrum rerum. Doloremque. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. In doloremque vitae quam
              aspernatur distinctio sint. Quod accusamus sequi expedita.
              Voluptatibus eos autem inventore explicabo veniam deserunt
              doloremque cum aperiam, iure quis dicta qui unde ea sequi, alias
              ex velit illum fugiat, doloribus quod optio sit. Nemo minus error
              omnis fugit animi eligendi assumenda. Officiis velit commodi, eum
              dignissimos inventore sint vero harum, maxime quis labore ipsam
              repellat possimus. Blanditiis ipsa ad minima nisi! Facere, sint?
              Possimus fugit repellat debitis hic necessitatibus illo quam,
              nobis quas cumque obcaecati optio harum ullam ratione, tempora
              praesentium impedit in id. Ipsa maxime quasi accusamus.
            </p>
            <p>
              Eaque reprehenderit corporis nihil ullam fuga. Atque corrupti unde
              repellendus dolorum consequuntur quis autem laborum in qui earum,
              consequatur pariatur consectetur voluptas quos maiores sapiente
              corporis libero laboriosam mollitia laudantium.
            </p>
          </div>
        )}
      </article>
    </>
  );
}
