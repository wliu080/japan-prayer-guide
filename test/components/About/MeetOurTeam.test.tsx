import { render } from "@testing-library/react";
import MeetOurTeam from "../../../components/about/MeetOurTeam";

describe("Meet Our Team", () => {
    test("Renders a container with title, image and 3 boxes", () => {
        const { getByTestId } = render(<MeetOurTeam />);
        const meetOurTeam = getByTestId("meet-our-team");

        //expect(meetOurTeam.).toBe(Node.)
        expect(meetOurTeam).toHaveClass("container");
        expect(meetOurTeam.children.length).toBe(3);

        // image
        const imageElement = meetOurTeam.children[0];
        expect(imageElement.tagName).toBe("DIV");
        expect(imageElement.id).toBe("team-image");

        // title
        expect(meetOurTeam.children[1].tagName).toBe("H4");

        // team detail boxes
        expect(meetOurTeam.children[2].children.length).toBe(3);
    });

    test("Team boxes should have responsive bootstrap classes for sizing", () => {
        const { getByTestId } = render(<MeetOurTeam />);
        const container = getByTestId("meet-our-team");

        const teamDetails = container.children[2];
        expect(teamDetails).toHaveClass("row-cols-md-3", "row-cols-sm-1", "row-cols-1");
    });
});
