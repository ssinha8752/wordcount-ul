import { render, screen } from "@testing-library/react"
import {Counter} from "../Counter"

describe("Counter Component Test",()=>{
    test("render the text area",()=>{
        const {getByTestId,getByPlaceholderText} = render(<Counter/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const textArea = getByTestId("textArea");
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const textPlaceHolder = getByPlaceholderText("Type or paste your text");
        expect(textArea).toBeTruthy();
        expect(textPlaceHolder).toBeTruthy();
        
    })
    
    test("render the char result",()=>{
        const {getByTestId} = render(<Counter/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const charLength = getByTestId("charLength");
        expect(charLength.innerHTML).toBe("Character: 0");
        
    })

    test("render the word result",()=>{
        render(<Counter/>)
        const wordLength=screen.getByTestId("wordLength")
        expect(wordLength).toBeTruthy();
    })
})

