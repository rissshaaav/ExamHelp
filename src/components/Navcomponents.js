import "./style.css";
import abs from "./images/abs.avif";
import me from "./images/me.jpeg";
import download from "./images/download.png";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((tooltip) => {
  new bootstrap.Tooltip(tooltip);
});

export function Home() {
  return (
    <section id="home" class=" mt-4" style={{ padding: "60px 0px", backgroundColor: "rgb(240, 238, 238)" }}>
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-info-circle-fill d-none d-md-inline"></i>eXAMhELP
          </h2>
          <p class="lead text-muted">
            Your Last Minute Solution..
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </p>
        </div>
        <div class="row my-5 aligh-items-center justify-content-center">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-info border-2">
              <h4 class="card-header border-info text-center">Notes</h4>
              <div class="card-body text-center py-4">
                <h5 class="card-title">Class Notes</h5>
                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  amet deserunt laborum. Odit ea ut voluptas amet quasi facilis
                  ipsa.
                </p>
                <Link to="/Notes" class="btn btn-outline-danger btn-md mt-3">View</Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-primary border-2">
              <h4 class="card-header border-primary text-center">PYQ's</h4>
              <div class="card-body text-center py-4">
                <h5 class="card-title">Previous Year Papers</h5>
                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi qui voluptatibus aspernatur aperiam maiores, iusto
                  sit, quos earum sapiente sequi impedit molestias voluptates
                  nobis quisquam.
                </p>
                <Link to="/PYQs" class="btn btn-outline-danger btn-md mt-3">View</Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-info border-2">
              <h4 class="card-header border-info text-center">Books</h4>
              <div class="card-body text-center py-4">
                <h5 class="card-title">Get your reference books.</h5>
                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  amet deserunt laborum. Odit ea ut voluptas amet quasi facilis
                  ipsa.
                </p>
                <Link to="/books" class="btn btn-outline-danger btn-md mt-3">View</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Notes() {
  return (
    <section id="Notes" class="bg-light mt-4" style={{ padding: "60px 0px" ,backgroundColor: "rgb(240, 238, 238)"  }}>
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-info-circle-fill d-none d-md-inline"></i> Class Notes
          </h2>
          <p class="lead text-muted">Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="list-group">

              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function PYQs() {
  return (
    <section id="PYQs" class="bg-light mt-4" style={{ padding: "60px 0px" ,backgroundColor: "rgb(240, 238, 238)"  }}>
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-info-circle-fill d-none d-md-inline"></i> Qustion Papers
          </h2>
          <p class="lead text-muted">Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="list-group">

              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>
              <div class="card my-3 mx-10 ">
                <div class="card-header d-flex">
                  <div class="px-2 flex-grow-1">
                    <h5 class="mb-1">Computer Architecture & Organization</h5>
                  </div>
                  <div class="px-3">
                    <FontAwesomeIcon icon={faEye} /></div>
                    <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
                </div>
                <div className="container">
                  <h6>CSE2023</h6>
                  <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex justify-content-between">
                    <small>Exam Date: Sep 07, 2023</small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Books(){
  return(
    <section id="books" class="bg-light mt-4" style={{ padding: "60px 0px" ,backgroundColor: "rgb(240, 238, 238)"  }}>
    <div class="container-lg">
      <div class="text-center">
        <h2>
          <i class="bi bi-info-circle-fill d-none d-md-inline"></i> Reference Books
        </h2>
        <p class="lead text-muted">Lorem ipsum dolor sit amet.</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="list-group">

            <div class="card my-3 mx-10 ">
              <div class="card-header d-flex">
                <div class="px-2 flex-grow-1">
                  <h5 class="mb-1">Computer Architecture & Organization</h5>
                </div>
                <div class="px-3">
                  <FontAwesomeIcon icon={faEye} /></div>
                  <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
              </div>
              <div className="container">
                <h6>CSE2023</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                <div class="d-flex justify-content-between">
                  <small>Exam Date: Sep 07, 2023</small>
                </div>
              </div>
            </div>
            <div class="card my-3 mx-10 ">
              <div class="card-header d-flex">
                <div class="px-2 flex-grow-1">
                  <h5 class="mb-1">Computer Architecture & Organization</h5>
                </div>
                <div class="px-3">
                  <FontAwesomeIcon icon={faEye} /></div>
                  <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
              </div>
              <div className="container">
                <h6>CSE2023</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                <div class="d-flex justify-content-between">
                  <small>Exam Date: Sep 07, 2023</small>
                </div>
              </div>
            </div>
            <div class="card my-3 mx-10 ">
              <div class="card-header d-flex">
                <div class="px-2 flex-grow-1">
                  <h5 class="mb-1">Computer Architecture & Organization</h5>
                </div>
                <div class="px-3">
                  <FontAwesomeIcon icon={faEye} /></div>
                  <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
              </div>
              <div className="container">
                <h6>CSE2023</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                <div class="d-flex justify-content-between">
                  <small>Exam Date: Sep 07, 2023</small>
                </div>
              </div>
            </div>
            <div class="card my-3 mx-10 ">
              <div class="card-header d-flex">
                <div class="px-2 flex-grow-1">
                  <h5 class="mb-1">Computer Architecture & Organization</h5>
                </div>
                <div class="px-3">
                  <FontAwesomeIcon icon={faEye} /></div>
                  <div class="px-3"><FontAwesomeIcon icon={faFileArrowDown} /></div>
              </div>
              <div className="container">
                <h6>CSE2023</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                <div class="d-flex justify-content-between">
                  <small>Exam Date: Sep 07, 2023</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export function Help() {
  return (
    <section id="contact" class="bg-light mt-4" style={{ backgroundColor: "rgb(240, 238, 238)" }}>
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-hand-index-thumb-fill"></i> Get in Touch
          </h2>
          <p class="lead text-muted">
            Questions to ask? Fill out the form to contact me directly...
          </p>
        </div>

        <div class="row justify-content-center my-5">
          <div class="col-lg-6">
            <form action="">
              <label for="email" class="form-label">
                Email address:
              </label>
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g. xyz@gmail.com"
                  required
                />

                <span class="input-group-text">
                  <span
                    class="tt"
                    data-bs-placement="bottom"
                    title="Enter an email address we can reply to"
                  >
                    <i class="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <label for="name" class="form-label">
                Name:
              </label>
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="e.g. John Doe"
                  required
                />

                <span class="input-group-text">
                  <span
                    class="tt"
                    data-bs-placement="bottom"
                    title="Pretty self explanatory really..."
                  >
                    <i class="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <label for="subject" class="form-label">
                What is your question about?
              </label>
              <div class="input-group mb-4">
                <span class="input-group-text">
                  <i class="bi bi-question-circle-fill"></i>
                </span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="subject"
                >
                  <option selected>Open this select menu</option>
                  <option value="Notes">Notes</option>
                  <option value="PYQ's">PYQ's</option>
                  <option value="Books">Books</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div class="form-floating mb-4">
                <textarea class="form-control" id="query" rows="5"></textarea>
                <label for="query" class="form-label">
                  Your query...
                </label>
              </div>

              <div class="mb-4 text-center">
                <button type="submit" class="btn btn-warning">
                  Submit <i class="bi bi-send-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contribute() {
  return (
    <section id="">
      
    </section>
  );
}
