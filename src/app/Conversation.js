import MessageElement from "./MessageElement"
import { formatMessage } from "./chatUtils"

const Conversation = ({ conversation, deleteMessage }) => {

	console.log("Rendering Conversation with messages:", conversation)
	return (
		<div className='flex-col overflow-y-scroll w-full h-full' >
			{conversation &&
				conversation
					// .filter((line) => line.char !== USERNAME)
					.map((response) => {
						// const formattedMessage = formatMessage(message)
						return <MessageElement
							key={response.id}
							messageId={response.id}
							charName={response.char.displayName}
							text={response.text}
							originalText={response.text}
							deleteMessage={deleteMessage}
						/>
					}
					)}
		</div>
	)
}

export default Conversation
