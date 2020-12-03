import React, {Fragment} from 'react'

export const Repos = ({repos}) => (
    <Fragment>
        {repos.map(repo => (
            <div className='card mb-3' key={repo.key}>
                <div className='card-body'>
                    <h5>
                        <a
                            href={repo.html_url}
                            target='_blank'
                            rel="noreferrer"
                        > {repo.name}</a>
                    </h5>
                </div>
            </div>
        ))}
    </Fragment>
)