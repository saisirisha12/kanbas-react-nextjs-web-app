const REMOTE_SERVER = process.env.NEXT_PUBLIC_REMOTE_SERVER;

export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>REMOTE_SERVER: {REMOTE_SERVER}</p>
      <hr />
    </div>
  );
}
