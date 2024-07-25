import Link from 'next/link'
import axios from 'axios'

export default function Contact(props) {
    return (
        <>
            <h1>Contact List</h1>
            {props.contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        Id: {contact.contactId}<br/>
                        Name: {contact.firstName}&nbsp;{contact.lastName}<br/>
                        Company: {contact.company}<br/>
                        Phone: {contact.phone}<br/>
                        Email: {contact.email}<br/>
                        <hr/>
                    </div>
                )
            })}
            
            
        </>
    )
}

export async function getStaticProps() {
    const contacts = await axios.get("http://contactlist.us-east-1.elasticbeanstalk.com/contacts")

    return {
        props: {
          contacts: contacts.data
        },
        revalidate: 10
        
      }
}