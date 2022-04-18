import Container from "@components/Container";
import Layout from "@components/Layout";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";

export default function Detail() {
  return (
    <Layout>
        <Container>
            <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
            <PostMetaTitle
            category="ui design"
            date= "ui"
            title="Understanding color theory"
            />
            <PostAuthor
            authorAvatar="/avatar.jpg"
            authorName="lisnay"
            authorJob="ui design"
            />
            </div>
            <div className="md:w-10/12 w-full flex item-center mx-auto my-10">
              <img src="/kalkulator.jpg" className="w-full rounded-2xl" alt="" />
            </div>
            <div className="md:w-8/12 w-full mx-auto leading-relaxed">
              <p className="text-2xl mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis assumenda porro, ea aliquam magnam veritatis laboriosam voluptatum reprehenderit. Dolor nobis exercitationem voluptatum atque, facilis pariatur repellendus quo distinctio error.
              </p>
              <p className="mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione, ducimus cum accusantium iste expedita similique illo maxime, aut reiciendis ex quis dolorum asperiores ipsum voluptatum, magni voluptates consequuntur repellendus! </p>
            </div>
        </Container>
    </Layout>
  )
}
