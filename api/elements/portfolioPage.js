import { fetchporfolioDataQuery } from "../queries/projects/portfolio";

/**
 * The Porfolio Page where all the projects reside
 */

class PorfolioV {

    _porfolioContainer = document.querySelector("#portfolio-v");

    constructor() {
        this.main()
    }

    main() {

        console.log("will-fetch-portfolio-items")

        fetchporfolioDataQuery().then((data)=>{
            let fetchedData = data.sautiPortfolios;


            console.log("did-fetch-portfolio-items",fetchedData)

            fetchedData.forEach((v)=>{

                let currentTemplate = this.getTemplate(
                    v.projectTitle,
                    v.projectImage.url,
                    v.projectSlug
                );
                this._porfolioContainer.insertAdjacentHTML("afterbegin",currentTemplate)
            })
        })
    }



    getTemplate(title,imageUrl,slugUrl,creationTime) {
        return `
        <div class="col-lg-5">
                                <a href="/project?=${slugUrl}" class="mil-portfolio-item mil-more mil-mb-60">
                                    <div class="mil-cover-frame mil-vert mil-up">
                                        <div class="mil-cover">
                                            <img src="${imageUrl}" alt="cover">
                                        </div>
                                    </div>
                                    <div class="mil-descr">
                                        <div class="mil-labels mil-up mil-mb-15">
                                            <div class="mil-label mil-upper mil-accent">digital marketing</div>
                                            <div class="mil-label mil-upper">${creationTime}</div>
                                        </div>
                                        <h4 class="mil-up">${title}</h4>
                                    </div>
                                </a>

                            </div>
        
        
        `

    }
}

new PorfolioV()