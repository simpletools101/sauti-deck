import { fetchBlogDataMainQuery } from "../queries/blogs/singleblog";
import { format, parseISO } from "date-fns";

class SingleBlogPage {
  blogViewContainer = document.querySelector("#blog-pass");
  blogViewContainerTitle = document.querySelector(".blog-title");

  constructor() {
    this.main();
  }

  main() {
    /**
     * for getting the url, of the blog
     */

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("url"); // e.g. ?url=my-first-post

    /**
     * The slug we get is what we send to hygraph for processing
     */
    console.log("will-fetch-data-with-slug", slug);
    fetchBlogDataMainQuery(slug).then((data) => {
      console.log("did-fetch-data-with-slig", data);
      let receivedBlogData = data.sautiBlogPost;
      console.log("recieved-data", receivedBlogData);

      let currentBlogItemTemplate = this.currentBlogItemTemplate(
        receivedBlogData.postImage.url,
        receivedBlogData.postContent.html,
        receivedBlogData.createdAt
      );

      this.blogViewContainerTitle.innerHTML = receivedBlogData.title;
      this.blogViewContainer.insertAdjacentHTML(
        "afterbegin",
        currentBlogItemTemplate
      );
    });
  }

  currentBlogItemTemplate(image, content, time) {
    const formatted = format(parseISO(time), "MMMM dd yyyy");

    return `
            <div class="row justify-content-center">
                            <div class="col-lg-12">

                                <div class="mil-image-frame mil-horizontal mil-up">
                                    <img src="${image}" alt="Publication cover" class="mil-scale" data-value-1=".90" data-value-2="1.15">
                                </div>
                                <div class="mil-info mil-up mil-mb-90">
                                    <div>Category: &nbsp;<span class="mil-dark">Marketing</span></div>
                                    <div>Date: &nbsp;<span class="mil-dark">${formatted}</span></div>
                                    <div>Author: &nbsp;<span class="mil-dark">Ndashimye Zepha</span></div>
                                </div>

                            </div>
                            <div class="col-lg-8">
                                <p class="mil-text-xl mil-dark mil-up mil-mb-60">${content}</p>
                               
                                

                            </div>
                        </div>
        
        
        `;
  }
}

new SingleBlogPage();
