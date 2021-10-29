import { MessageArrowCurrentPath } from "../styles/learn-comp";

interface stateProp {
  isOpenMessageWindow: boolean;
  currentTheme: string;
}

export default function messageInformation({
  isOpenMessageWindow,
  currentTheme,
}: stateProp) {
  return (
    <>
      {isOpenMessageWindow && (
        <>
          <div className="containerMessageInformation">
            <MessageArrowCurrentPath
              theme={{
                currTheme: currentTheme,
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
