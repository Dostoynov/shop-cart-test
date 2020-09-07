import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions/redditActions";
import ReactPaginate from 'react-paginate'
import './styles.css'

class RedditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      offset: 0,
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({ offset: offset });
  };

  Post = (item) =>
  <li className='post'>
    <img src={item.img} alt="NoImg"/>
    <div className='text'>
      <p>{item.title}</p>
      <a href={item.url} target='_blank' rel="noopener noreferrer">Link</a>
    </div>
  </li>

  render () {
    return (
        <Modal isOpen={this.props.isOpen} onRequestClose={this.props.handleModal}>
          <Zoom>
            <button className="close-modal primaryBtn" onClick={this.props.handleModal}>
              x
            </button>
            {!this.props.posts ?
                <div className='loading'>Loading...</div> :
                <div>
                  <ul className="products">
                    {this.props.posts.slice(this.state.offset, this.state.offset + 10).map((item) => this.Post(item))}
                  </ul>
                  <ReactPaginate
                      previousLabel={'<'}
                      nextLabel={'>'}
                      breakLabel={'...'}
                      breakClassName={'break-me'}
                      per
                      pageCount={this.props.posts.length/10}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={'pagination'}
                      subContainerClassName={'pages pagination'}
                      activeClassName={'active'}
                  />
                </div>
            }
          </Zoom>
        </Modal>
    )
  }
}


export default connect(
    (state) => ({ posts: state.reddit.items }),
    {
      fetchPosts
    }
)(RedditModal);
