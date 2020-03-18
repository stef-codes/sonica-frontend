import React from 'react'

function JournalEntryText({text}) {
    return (
        <div>
            {text.map((entry) => 
            <div>
            <br/>
            <strong>Feeling: </strong>{entry.feeling_name}
            <br/>
            <strong>Entry: </strong>{entry.entry_text}
            <br/>
            </div>
            )}
        </div>
    )
}

export default JournalEntryText
