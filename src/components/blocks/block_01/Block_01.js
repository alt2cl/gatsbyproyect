import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Vista1 from '../../vistas/vista_01/Vista_01'

import './block_01.sass'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section block_01">
        <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
            <small>{posts[0].node.title}</small>            
        </div>
        <div className="content">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <Vista1 title={posts[0].node.title} />
            </div>
          </div>
        </div>
        <div className="container">
          
          
          <div className="tile is-ancestor">
            <div className="tile">
              <div className="tile is-4">
                <div className="tile is-parent">
                  <Vista1 title={posts[1].node.title} />
                </div>                
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <Vista1 title={posts[2].node.title} />
                </div>                
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <Vista1 title={posts[3].node.title} />
                </div>                
              </div>
            </div>
          </div>

          

          <Vista1 title={posts[1].node.title} />


          
          {posts.map(({ node: post }) => (
            <div 
              className="content"
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date} 
                  - posted by 
                  {' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link className="button is-small" to={post.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
