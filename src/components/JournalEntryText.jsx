import React from 'react'

function JournalEntryText({text}) {
    return (
        <div>
            <br/>
            {text.map((entry) => 
            <div>
            <br/>
            <strong>Feeling: </strong>{entry.feeling_name}
            <br/>
            <strong>Entry: </strong>{entry.entry_text}
            <br/>
            <hr/>
            </div>
            )}
            <hr/>
        </div>
    )
}

export default JournalEntryText
